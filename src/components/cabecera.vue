<script setup>
import {ref} from "vue";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "@/firebase";

let loged = ref("");

onAuthStateChanged(auth, (user) => {
    loged.value = !!user;
});

function cerrarSesion() {
    signOut(auth).then(() => {
        console.log("Sesion cerrada");
    }).catch((error) => {
        console.log(error);
    });
}


let loaded = ref(false)
setTimeout(() => {
    loaded.value = true;
}, 1000);

</script>

<template>
    <header>
        <nav>
            <router-link to="/">Inicio</router-link>
            <router-link to="/ofimatica">Ofim&aacute;tica</router-link>
            <router-link to="/programacion">Programaci&oacute;n</router-link>
            <router-link to="/sos">SOs</router-link>
            <router-link to="/admin" v-if="loged">Administraci&oacute;n</router-link>
            <router-link to="/registro" v-if="!loged"><fieldset>Iniciar Sesi&oacute;n</fieldset></router-link>
            <router-link to="/registro" v-else @click="cerrarSesion"><fieldset>Cerrar Sesi&oacute;n</fieldset></router-link>
        </nav>
    </header>

    <main>
        <div v-if="!loaded">
            <div class="preload"></div>
        </div>
        <div v-else>
            <Suspense><router-view></router-view></Suspense>
        </div>


    </main>
</template>


<style scoped>
header {
    line-height: 1.5;
    gap: 20px;

}
nav {
    display: flex;
    padding: 0 50px;
    gap: 50px;
    align-items: center;
}

button {
    padding: 2px 5px;
}

button:hover {
    cursor: pointer;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: calc(var(--section-gap) / 2);
    }


}

 .preload {
     width: 60px;
     height: 60px;
     border: 8px solid #ffffff;
     border-top: 8px solid hsla(160, 100%, 37%, 1);
     border-radius: 50%;
     animation: spin 0.7s ease-in-out infinite;
     margin: 50px auto;
     backdrop-filter: blur(100px);
 }

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

</style>