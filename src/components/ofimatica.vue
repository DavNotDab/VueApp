
<!-- Componente que recoge los cursos de la categoria ofimatica -->

<script setup>
import Cursos from "@/components/cursos.vue";
import Curso from "@/components/curso.vue";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase";
import {ref} from "vue";
let loaded = ref(false)

// Obtiene los cursos de la base de datos de la categoria ofimatica
let cursos;
const querySnapshot = await getDocs(collection(db, "cursos"));
querySnapshot.forEach((doc) => {
    cursos = doc.data()["ofimatica"];
    loaded.value = true;
});
console.log(cursos);

</script>

<template>

    <!-- Muestra un preloader mientras se cargan los datos de la base de datos -->
    <div v-if="!loaded">
        <div class="preload"></div>
    </div>
    <div v-else>
        <cursos>
            <template #titulo>
                Cursos de ofim&aacute;tica
            </template>

            <!-- Muestra los cursos de la categoria ofimatica -->
            <template v-for="curso in cursos">
                <curso>
                    <template #curso-img>
                        <img v-bind:src="'/src/media/'+curso.imagen" alt="curso-icon">
                    </template>
                    <template #curso-name>
                        {{ curso.nombre }}
                    </template>
                    <template #curso-descripcion>
                        {{ curso.descripcion }}
                    </template>
                    <template #curso-duracion>
                        {{ curso.duracion }}
                    </template>
                </curso>
            </template>
        </cursos>
    </div>

</template>
