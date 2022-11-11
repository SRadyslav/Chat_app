import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCC_R-2DwB1L9UJJtwm0Wrj0G-1Cz29-x8",
    authDomain: "chat-51177.firebaseapp.com",
    projectId: "chat-51177",
    storageBucket: "chat-51177.appspot.com",
    messagingSenderId: "37837987006",
    appId: "1:37837987006:web:d5c2dd643c81292d8d92ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()