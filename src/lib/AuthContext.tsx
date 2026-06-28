import { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, getDoc, setDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { UserProfile } from '../types';

type AuthContextType = {
  user: User | null;
  role: string | null;
  profile: UserProfile | null;
  loading: boolean;
  redirectError: string | null;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [redirectError, setRedirectError] = useState<string | null>(null);

  useEffect(() => {
    // Check for redirect results right away
    getRedirectResult(auth).catch((error) => {
      console.error('Redirect result error', error);
      setRedirectError(error.message || 'Erreur lors de la connexion via redirection.');
    });

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        // Fetch or create user document
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          let currentData = userDoc.data() as UserProfile;
          
          // Check for subscription expiration
          if (currentData.plan === 'premium' && currentData.subscriptionEnd) {
             const endDate = new Date(currentData.subscriptionEnd);
             if (endDate.getTime() < Date.now()) {
                await updateDoc(userDocRef, {
                   plan: 'free',
                   paymentStatus: 'expired'
                });
                currentData = { ...currentData, plan: 'free', paymentStatus: 'expired' };
             }
          }

          const currentRole = currentData.role;
          if (user.email === 'salahmohamedzouagui@gmail.com' && currentRole !== 'admin') {
             try {
               await setDoc(userDocRef, { ...currentData, role: 'admin' }, { merge: true });
               setRole('admin');
               setProfile({ ...currentData, id: user.uid, role: 'admin' });
             } catch(e) {
               console.error('Error updating role', e);
               setRole('admin');
               setProfile({ ...currentData, id: user.uid, role: 'admin' });
             }
          } else {
            setRole(currentRole);
            setProfile({ ...currentData, id: user.uid });
          }
        } else {
          // Verify user exists and initialize profile
          const newProfile: Partial<UserProfile> = {
              email: user.email || '',
              displayName: user.displayName || user.email?.split('@')[0] || 'User',
              role: user.email === 'salahmohamedzouagui@gmail.com' ? 'admin' : 'user',
              plan: 'free',
              createdAt: Date.now()
          };
          try {
            await setDoc(userDocRef, { ...newProfile, createdAt: serverTimestamp() });
            setRole(newProfile.role as string);
            setProfile({ ...newProfile, id: user.uid } as UserProfile);
          } catch(e) { console.error('Error creating user profile', e)}
        }
      } else {
        setRole(null);
        setProfile(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    setRedirectError(null);
    try {
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      console.error("Popup Error:", error);
      // Specific error handling for mobile popup blockers or cross-origin issues
      if (error.code === 'auth/popup-blocked' || error.code === 'auth/internal-error' || error.code === 'auth/popup-closed-by-user') {
        throw new Error("L'ouverture de la fenêtre de connexion Google a échoué (Bloqueur de pop-up ou navigateur intégré). \n\nAstuce: Ouvrez ce lien dans votre navigateur externe classique (Safari ou Chrome) au lieu du navigateur intégré à l'application.");
      } else {
        throw new Error("Erreur de connexion avec Google: " + error.message);
      }
    }
  };

  const loginWithEmail = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      if (error.code === 'auth/invalid-login-credentials' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        throw new Error("Email ou mot de passe incorrect.");
      }
      throw new Error("Erreur lors de la connexion : " + error.message);
    }
  };

  const registerWithEmail = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        throw new Error("Cet email est déjà utilisé.");
      } else if (error.code === 'auth/weak-password') {
        throw new Error("Le mot de passe doit contenir au moins 6 caractères.");
      }
      throw new Error("Erreur lors de l'inscription : " + error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, role, profile, loading, redirectError, loginWithGoogle, loginWithEmail, registerWithEmail, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
