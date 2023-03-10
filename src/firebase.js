import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// La configuración de Firebase
export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDZ4MMbVH5GTWWU_QIcnImnBisdtkDEZ4Q",
    authDomain: "autentificacion-6e56f.firebaseapp.com",
    projectId: "autentificacion-6e56f",
    storageBucket: "autentificacion-6e56f.appspot.com",
    messagingSenderId: "986000935330",
    appId: "1:986000935330:web:551d625a52738d7e3fcafb"
});

// Exportamos las funciones de autenticación y base de datos
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
