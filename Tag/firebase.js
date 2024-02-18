// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuoMHwFJ2hkcSBdRYzVmKi31FDUmiHl9M",
  authDomain: "treehacks2024-925f2.firebaseapp.com",
  projectId: "treehacks2024-925f2",
  storageBucket: "treehacks2024-925f2.appspot.com",
  messagingSenderId: "240657790532",
  appId: "1:240657790532:web:c6e4fcf9f11bc284ec2e11",
  measurementId: "G-NYBDR5621N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
