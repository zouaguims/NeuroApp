import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

if ('serviceWorker' in navigator) {
  const updateSW = registerSW({
    immediate: true,
    onNeedRefresh() {
      console.log('Nouveau contenu disponible, mise à jour de la PWA...');
      updateSW(true);
    },
    onOfflineReady() {
      console.log('L\'application est prête pour l\'utilisation hors-ligne.');
    }
  });

  // Vérifier les mises à jour lorsque l'utilisateur revient sur l'application portable
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      updateSW().catch(err => console.error('Échec de la recherche de mise à jour:', err));
    }
  });

  // Vérifier périodiquement toutes les minutes pour un rechargement rapide des modifications
  setInterval(() => {
    updateSW().catch(err => console.error('Échec de la recherche périodique de mise à jour:', err));
  }, 1000 * 60);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
