
<script setup>
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "@/firebase";
import {ref} from "vue";
import { getStorage, ref as refStrg, uploadBytes, getDownloadURL } from "firebase/storage";
import * as url from "url";

let nombreUsuario = ref("");

onAuthStateChanged(auth, (user) => {
    if (user) {
        nombreUsuario.value = user.email;
    }
});

function cerrarSesion() {
    signOut(auth).then(() => {
        console.log("Sesion cerrada");
    }).catch((error) => {
        console.log(error);
    });
}

let file = ref("");

function subirArchivo() {
    const storage = getStorage();
    const storageRef = refStrg(storage, file.value.files[0].name);
    uploadBytes(storageRef, file.value.files[0]).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        getDownloadURL(storageRef)
            .then((url) => {
                console.log(url);
            })
    });
}

</script>

<template>
    <h1>Area privada</h1>
    <h3>Bienvenido {{nombreUsuario}}</h3>
    <button @click="cerrarSesion">Cerrar sesion</button>
    <br>
    <p><input type="file" name="file" id="file" ref="file" @change="subirArchivo"></p>
</template>