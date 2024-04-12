

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAphpfY0u6QKebf9In9SNbZVU1CzNrF47c",
    authDomain: "sistema-chamados-27879.firebaseapp.com",
    projectId: "sistema-chamados-27879",
    storageBucket: "sistema-chamados-27879.appspot.com",
    messagingSenderId: "971198671808",
    appId: "1:971198671808:web:022f2ff58ecdbbd4e0b625",
    measurementId: "G-9P04EMLLPM"
  };

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export {
    auth,
    db,
    storage
}