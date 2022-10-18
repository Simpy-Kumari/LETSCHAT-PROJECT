import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBr19GADLmLAELzbXBspONjrWXrC-1h5VU",
  authDomain: "letschat-c0a7f.firebaseapp.com",
  projectId: "letschat-c0a7f",
  storageBucket: "letschat-c0a7f.appspot.com",
  messagingSenderId: "764827045464",
  appId: "1:764827045464:web:6c159f5db62545c8b7c42d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();

