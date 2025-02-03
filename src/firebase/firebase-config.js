// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVt-mizuq32IoIuIWSp9XGyR9LyRZOiZw",
  authDomain: "foaf-fd9ea.firebaseapp.com",
  projectId: "foaf-fd9ea",
  storageBucket: "foaf-fd9ea.firebasestorage.app",
  messagingSenderId: "35882672287",
  appId: "1:35882672287:web:fa88b88311528a617482aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize db
export const db = getFirestore(app);
