// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = initializeApp ({
  apiKey: "AIzaSyDNZZglvPc2t241jXPLknjIIlhor61N0fU",
  authDomain: "nextproject-e9b8f.firebaseapp.com",
  projectId: "nextproject-e9b8f",
  storageBucket: "nextproject-e9b8f.appspot.com",
  messagingSenderId: "139200328044",
  appId: "1:139200328044:web:4cae90066167c1cc90c349",
  measurementId: "G-E08KECE9QJ"
});

// Initialize Firebase
const storage = getStorage(app);
export default storage; 