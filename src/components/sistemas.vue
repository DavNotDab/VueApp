<script setup>
import Cursos from "@/components/cursos.vue";
import Curso from "@/components/curso.vue";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/firebase";
import {ref} from "vue";
let loaded = ref(false)

let cursos;
const querySnapshot = await getDocs(collection(db, "cursos"));
querySnapshot.forEach((doc) => {
    cursos = doc.data()["sistemas"];
    loaded.value = true;
});
console.log(cursos);

</script>

<template>

    <div v-if="!loaded">
        <div class="preload"></div>
    </div>
    <div v-else>
        <cursos>
            <template #titulo>
                Cursos de ofim&aacute;tica
            </template>

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
