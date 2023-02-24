<script setup>
import Cursos from "@/components/cursos.vue";
import Curso from "@/components/curso.vue";
</script>

<template>

    <cursos>
        <template #titulo>
            Cursos de Sistemas Operativos
        </template>

        <template #curso1>
            <curso>
                <template #curso-img>
                    <img src="../media/windows-10.png" alt="curso-icon">
                </template>
                <template #curso-name>
                    Windows 10
                </template>
                <template #curso-descripcion>
                    En este curso apreder&aacute;s a usar Windows 10.
                </template>
                <template #curso-duracion>
                    25 horas.
                </template>
            </curso>
        </template>

        <template #curso2>
            <curso>
                <template #curso-img>
                    <img src="../media/ubuntu.png" alt="curso-icon">
                </template>
                <template #curso-name>
                    Ubuntu
                </template>
                <template #curso-descripcion>
                    En este curso apreder&aacute;s a usar Ubuntu.
                </template>
                <template #curso-duracion>
                    15 horas.
                </template>
            </curso>
        </template>

        <template #curso3>
            <curso>
                <template #curso-img>
                    <img src="../media/mac.png" alt="curso-icon">
                </template>
                <template #curso-name>
                    Mac Os
                </template>
                <template #curso-descripcion>
                    En este curso apreder&aacute;s a usar Mac Os.
                </template>
                <template #curso-duracion>
                    18 horas.
                </template>
            </curso>
        </template>

    </cursos>


</template>

<style>



</style>