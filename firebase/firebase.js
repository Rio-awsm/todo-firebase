import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCY8aW-L_0Pu7jFIW4QFsOlxkVCRq7WE1w",
  authDomain: "todo-firebase-a283b.firebaseapp.com",
  projectId: "todo-firebase-a283b",
  storageBucket: "todo-firebase-a283b.appspot.com",
  messagingSenderId: "489067075449",
  appId: "1:489067075449:web:0c737bcdc0b9c49fc181a8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);