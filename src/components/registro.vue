<script setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth } from "@/firebase";

let usuario = ref(""), password = ref("");
const provider = new GoogleAuthProvider();


function altaUsuario() {
    createUserWithEmailAndPassword(auth, usuario.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
}

function loginUsuario() {
    signInWithEmailAndPassword(auth, usuario.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
}

function loginGoogle() {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}

</script>

<template>
  <div>
    <h1>Registro</h1>
      <label for="usuario">Usuario: </label>
      <input type="text" v-model="usuario" placeholder="usuario" id="usuario" name="usuario"> <br>
      <label for="password">Password: </label>
      <input type="password" v-model="password" placeholder="password" id="password" name="password"> <br>
      <button @click="altaUsuario">Registrar</button>
      <button @click="loginUsuario">Iniciar Sesión</button>
      <button @click="loginGoogle">Login Google</button>

  </div>
</template>


