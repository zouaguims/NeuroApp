export type Category = {
    id: string;
    name: string;
    order: number;
}

export type Disease = {
    id: string;
    categoryId: string;
    name: string;
    content?: string;
    definition?: Record<string, any>;
    epidemiology?: Record<string, any>;
    physiopathology?: Record<string, any>;
    etiologies?: { cause: string; frequency: string; importance: string }[];
    clinical?: {
        functional?: string[];
        physical?: string[];
        biological?: string[];
        gravity?: string[];
    };
    diagnosis?: {
        biological?: string[];
        hormonal?: string[];
        imaging?: string[];
        criteria?: string[];
        normalValues?: string[];
        pathologicalValues?: string[];
    };
    differentialDiagnosis?: Record<string, any>;
    complications?: {
        acute?: string[];
        chronic?: string[];
        emergencies?: string[];
    };
    treatment?: {
        firstLine?: string[];
        secondLine?: string[];
        specific?: string[];
        surveillance?: string[];
    };
    keyPoints?: {
        toRemember?: string[];
        traps?: string[];
        faq?: string[];
        keywords?: string[];
    };
}

export type Favorite = {
    id: string;
    diseaseId: string;
    diseaseName: string;
    createdAt: number;
}

export type UserProfile = {
    id: string;
    email: string;
    displayName: string;
    role: string;
    plan?: 'free' | 'premium';
    paymentStatus?: 'pending' | 'active' | 'expired' | 'none';
    subscriptionEnd?: number;
    createdAt: number;
}

export type PremiumPayment = {
    id: string;
    userId: string;
    userEmail: string;
    userName: string;
    transactionNumber: string;
    paymentDate: string;
    screenshotUrl: string;
    amount: number;
    status: 'pending' | 'approved' | 'rejected';
    createdAt: number;
}
