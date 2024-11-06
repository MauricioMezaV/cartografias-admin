import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDzu9ZCZb71Q7hnJIO21v_uDJEWH4Om-DI",
    authDomain: "hpc-uoh.firebaseapp.com",
    projectId: "hpc-uoh",
    storageBucket: "hpc-uoh.appspot.com",
    messagingSenderId: "48647328553",
    appId: "1:48647328553:web:5c29383d31818e3280dd38"
};

const app = firebase.initializeApp(firebaseConfig);

export const storage = app.storage();
export const storageRoot = storage.ref();