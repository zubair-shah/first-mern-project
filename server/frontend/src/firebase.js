
import { initializeApp } from "firebase/app"
import { getFirestore  } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDGk9TaZ5OFtpemnturtP01oniU_gijVR8",
  authDomain: "zubair-react-todo.firebaseapp.com",
  projectId: "zubair-react-todo",
  storageBucket: "zubair-react-todo.appspot.com",
  messagingSenderId: "224237301888",
  appId: "1:224237301888:web:90b5033bf69c89dc107665",
  measurementId: "G-CHNYKL0W71"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore();
