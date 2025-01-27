import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
 apiKey: 'AIzaSyCX9SVgwdg8YTOhMzyNmtDJwuPsRScB220',
 authDomain: 'leandro-5fafd.firebaseapp.com',
 projectId: 'leandro-5fafd',
 storageBucket: 'leandro-5fafd.firebasestorage.app',
 messagingSenderId: '335902113330',
 appId: '1:335902113330:web:cdd69dc7b445f7ebbc462b',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);