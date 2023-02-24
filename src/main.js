import { createApp } from 'vue';
import App from './App.vue';

import TheWelcome from "@/components/Bienvenida.vue";
import Registro from "@/components/registro.vue";

import {createRouter, createWebHistory} from "vue-router";
import { onAuthStateChanged } from "firebase/auth";

import './assets/main.css';
import {auth} from "@/firebase";
import Ofimatica from "@/components/ofimatica.vue";
import Programacion from "@/components/programacion.vue";
import Sos from "@/components/sistemas.vue";
import Admin from "@/components/admin.vue";

let autenticado = false;

const routes = [
    {
        path: '/',
        name: 'Home',
        component: TheWelcome
    },
    {
        path: '/ofimatica',
        name: 'Ofimatica',
        component: Ofimatica
    },
    {
        path: '/programacion',
        name: 'Programacion',
        component: Programacion
    },
    {
        path: '/sos',
        name: 'SOs',
        component: Sos
    },
    {
        path: '/registro',
        name: 'Registro',
        component: Registro
    },

    {
        path: '/admin',
        name: 'Administración',
        component: Admin,
        meta: {
            autenticado: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        autenticado = true;
    } else {
        autenticado = false;
        router.push('/');
    }
});


const app = createApp(App);
app.use(router);

app.mount('#app');

