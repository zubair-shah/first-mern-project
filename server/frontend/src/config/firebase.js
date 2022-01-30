// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1OBw5r6WGOQsRg-l7xwQ0BwvjHYlDrAw",
  authDomain: "sfhackathone.firebaseapp.com",
  projectId: "sfhackathone",
  storageBucket: "sfhackathone.appspot.com",
  messagingSenderId: "783823220426",
  appId: "1:783823220426:web:969a370708f42fd6e10e33",
  measurementId: "G-K8KLE93NNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);