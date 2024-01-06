// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDkbZ8dI5dbRDKlWQcrNxaJO9GoBDW-T4U",
  authDomain: "my-portfolio-f57be.firebaseapp.com",
  projectId: "my-portfolio-f57be",
  storageBucket: "my-portfolio-f57be.appspot.com",
  messagingSenderId: "751515593106",
  appId: "1:751515593106:web:6504c8dec8126d3c1d394b",
  measurementId: "G-4D5VHMVC8T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
