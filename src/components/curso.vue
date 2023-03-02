
<!--
    Este componente se encarga de mostrar los cursos que se encuentran en la base de datos
    de firebase.
-->

<script setup>
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "@/firebase.js";
import {ref} from "vue";
import { getStorage, ref as StrgRef, getDownloadURL } from "firebase/storage";

const storage = getStorage();

let loged = ref("")

// Detecta cada vez que el usuario inicia o cierra sesión
onAuthStateChanged(auth, (user) => {
    loged.value = !!user;
});

let nombreCurso = ref("");
// Funcion que muestra la vista detallada (pdf) del curso seleccionado
function showCourse() {
    document.querySelectorAll(".curso-content").forEach((curso) => {
        curso.addEventListener("click", () => {
            nombreCurso.value = curso.querySelector(".curso-name").textContent;
            console.log(nombreCurso.value);

            getDownloadURL(StrgRef(storage, nombreCurso.value+'.jpg'))
                .then((url) => {
                    // Insertamos la url del pdf dentro de nuestro html
                    const img = document.getElementById('myimg');
                    img.setAttribute('src', url);
                })
                .catch((error) => {
                    console.log(error);
                    });
        });
    });
}

</script>

<template>
    <!-- Al pulsar el fieldset se activa o desactiva la vista detallada-->
    <fieldset @click="showCourse()">
        <section class="curso-content" v-if="nombreCurso === ''">
            <slot name="curso"></slot>
            <div class="curso-img">
                <slot name="curso-img"></slot>
            </div>
            <h2 class="curso-name">
                <slot name="curso-name"></slot>
            </h2>
            <p class="curso-descripcion">
                <slot name="curso-descripcion"></slot>
            </p>
            <p class="curso-duracion">
                Duraci&oacute;n:
                <b>
                    <slot name="curso-duracion"></slot>
                </b>
            </p>
            <button v-if="loged">Ap&uacute;ntate</button>
        </section>
        <section v-else>
            <div @click="nombreCurso = ''">CERRAR</div>
            <embed id="myimg" src="" type="image/jpg" />
        </section>
    </fieldset>
</template>

<style scoped>

.curso-content {
    display: flex;
    gap: 50px;
    align-content: center;
    justify-content: space-between;
}

.curso-name {
    font-weight: bold;
    margin: 10px 0;
}

embed {
    width: 100%;
}

b {
    font-weight: bold;
}

</style>