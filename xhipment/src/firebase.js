import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6qe7qlFLiHrt6UPdjwW6hQQuVbwdIaL8",
  authDomain: "xhipmentauth.firebaseapp.com",
  projectId: "xhipmentauth",
  storageBucket: "xhipmentauth.appspot.com",
  messagingSenderId: "19232584760",
  appId: "1:19232584760:web:4c81499da560011f90a2cd",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
