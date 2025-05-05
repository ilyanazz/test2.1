// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getFirestore, doc, getDoc, updateDoc, onSnapshot, collection, query, orderBy
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDaRLmnE2t8v_bXtm_r_RrnuMhtJBfomug",
    authDomain: "test2-74b30.firebaseapp.com",
    projectId: "test2-74b30",
    storageBucket: "test2-74b30.firebasestorage.app",
    messagingSenderId: "776427276353",
    appId: "1:776427276353:web:0c7285a031ff3271069ec0"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, getDoc, updateDoc, onSnapshot, collection, query, orderBy };
