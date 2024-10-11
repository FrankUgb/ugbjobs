// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu9IAokz1HrCsFPGUn5Qv8vNP1oIGdkYA",
  authDomain: "jobssoftware-422f2.firebaseapp.com",
  projectId: "jobssoftware-422f2",
  storageBucket: "jobssoftware-422f2.appspot.com",
  messagingSenderId: "331500450148",
  appId: "1:331500450148:web:901a9624a36f81c4248a71",
  measurementId: "G-3QBRV43J87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('Firebase app initialized:', app); // Usar `app` para evitar el warning
