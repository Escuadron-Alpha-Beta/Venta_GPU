import Firebase from "firebase";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyDXMFS_Gku2khm3zH2zsIY9zye-rkz2e24",
  authDomain: "vanguardia-proyecto.firebaseapp.com",
  projectId: "vanguardia-proyecto",
  storageBucket: "vanguardia-proyecto.appspot.com",
  messagingSenderId: "8893539402",
  appId: "1:8893539402:web:cfe7f4407a1403bb00f2b3",
  measurementId: "G-LFEE7J2X8X"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
export const firebase = app;
export const fs = app.firestore();
