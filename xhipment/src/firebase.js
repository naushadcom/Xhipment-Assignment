// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNAjL9Bqw2EjooWKt-fjI3XM7Ndv4VXUo",
  authDomain: "auth-a767c.firebaseapp.com",
  projectId: "auth-a767c",
  storageBucket: "auth-a767c.appspot.com",
  messagingSenderId: "877334249829",
  appId: "1:877334249829:web:e1b8078e1bb6df9ae5218c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
