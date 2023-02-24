<script setup>
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "@/firebase.js";
import {ref} from "vue";

let loged = ref("")

onAuthStateChanged(auth, (user) => {
    loged.value = !!user;
});

function showCourse() {
    console.log("Curso");
}

</script>

<template>
    <fieldset @click="showCourse()">
        <section class="curso-content">
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
                <b>Duraci&oacute;n:</b>
                <slot name="curso-duracion"></slot>
            </p>
            <button v-if="loged">Ap&uacute;ntate</button>
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



b {
    font-weight: bold;
}

</style>