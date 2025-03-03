// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_HRmafWu81WIy5clEUvK0fEjONUNXVyc",
  authDomain: "ecom-green-web.firebaseapp.com",
  projectId: "ecom-green-web",
  storageBucket: "ecom-green-web.firebasestorage.app",
  messagingSenderId: "80507921477",
  appId: "1:80507921477:web:68e8db64b538c05ac9ef2c",
  measurementId: "G-4JELMMCQ3B",
  databaseURL:"https://ecom-green-web-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const auth = getAuth(app);


export { database, ref, set, push, onValue };