// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, set, get, update, remove, ref, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA34g_aEO7pTOR2MKfa679WaEq6ubNtB3s",
  authDomain: "letschat-webapp2.firebaseapp.com",
  projectId: "letschat-webapp2",
  storageBucket: "letschat-webapp2.appspot.com",
  messagingSenderId: "348990570747",
  appId: "1:348990570747:web:9c939087c03f89c55fb05e",
  measurementId: "G-MP13EMVVBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


