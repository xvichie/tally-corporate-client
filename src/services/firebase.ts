import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBe9e-wI9iDzFriEyJTqS0i2WVY_h2DjFg",
    authDomain: "alfa-website-22a9b.firebaseapp.com",
    projectId: "alfa-website-22a9b",
    storageBucket: "alfa-website-22a9b.appspot.com",
    messagingSenderId: "775628055637",
    appId: "1:775628055637:web:e429aa953a0f382612e0dc",
    measurementId: "G-HVDB4B5LPW"
  };

const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

export { auth, db };
