// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYvI_3QHVGWfUpwhWZY-wsiqMOUi1jwLU",
    authDomain: "ilham-io.firebaseapp.com",
    projectId: "ilham-io",
    storageBucket: "ilham-io.appspot.com",
    messagingSenderId: "942426028232",
    appId: "1:942426028232:web:f3fd09e45a5d541f750dfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);