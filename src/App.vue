<script setup>
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "@/firebase";
import {ref} from "vue";

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
      <router-view></router-view>

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
</style>