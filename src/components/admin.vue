
<script setup>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { ref } from "vue";
import { getStorage, ref as refStrg, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import Ofimatica from "@/components/ofimatica.vue";
import Programacion from "@/components/programacion.vue";
import Sos from "@/components/sistemas.vue";

let nombreUsuario = ref("");

onAuthStateChanged(auth, (user) => {
    if (user) {
        nombreUsuario.value = user.email;
    }
});

let file = ref("");

function subirArchivo() {
    const storage = getStorage();
    const storageRef = refStrg(storage, file.value.files[0].name);
    uploadBytes(storageRef, file.value.files[0]).then(() => {
        console.log('Uploaded a blob or file!');
        getDownloadURL(storageRef)
            .then((url) => {
                console.log(url);
            })
    });
}


const querySnapshot = await getDocs(collection(db, "cursos"));
querySnapshot.forEach((doc) => {
    console.log(doc.data());
});

</script>

<template>
    <div class="header">
        <h1>Area privada</h1>
        <h3>Bienvenido {{nombreUsuario}}</h3>
        <p><input type="file" name="file" id="file" ref="file" @change="subirArchivo"></p>
    </div>

    <div class="main">
        <div class="cursos">

            <section class="cursos-ofimatica">
                <Ofimatica></Ofimatica>
            </section>

            <section class="cursos-programacion">
                <Programacion></Programacion>
            </section>
            <section class="cursos-sistemas">
                <Sos></Sos>
            </section>
        </div>
    </div>
</template>