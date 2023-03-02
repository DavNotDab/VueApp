
<!-- Este componente es el que se muestra cuando el usuario entra en la zona de administracion -->

<script setup>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { ref } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import Ofimatica from "@/components/ofimatica.vue";
import Programacion from "@/components/programacion.vue";
import Sos from "@/components/sistemas.vue";
import NuevoCurso from "@/components/nuevoCurso.vue";

let nombreUsuario = ref("");

// Detecta cada vez que el usuario inicia o cierra sesión
onAuthStateChanged(auth, (user) => {
    if (user) {
        nombreUsuario.value = user.email;
    }
});

// Obtiene los cursos de la base de datos
const querySnapshot = await getDocs(collection(db, "cursos"));
querySnapshot.forEach((doc) => {
    console.log(doc.data());
});

</script>

<template>
    <div class="header">
        <h1>Area privada</h1>
        <h3>Bienvenido {{nombreUsuario}}</h3>
    </div>

    <!-- Muestra los cursos de la base de datos -->
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
        <br><br>
        <!-- Carga el formulario para añadir un nuevo curso -->
        <NuevoCurso></NuevoCurso>

    </div>
</template>