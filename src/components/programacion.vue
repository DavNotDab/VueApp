<script setup>
import Cursos from "@/components/cursos.vue";
import Curso from "@/components/curso.vue";
</script>

<template>

    <cursos>
        <template #titulo>
            Cursos de Programaci&oacute;n
        </template>

        <template #curso1>
            <curso>
                <template #curso-img>
                    <img src="../media/python.png" alt="curso-icon">
                </template>
                <template #curso-name>
                    Python
                </template>
                <template #curso-descripcion>
                    En este curso apreder&aacute;s a usar Python.
                </template>
                <template #curso-duracion>
                    48 horas.
                </template>
            </curso>
        </template>

        <template #curso2>
            <curso>
                <template #curso-img>
                    <img src="../media/javascript.png" alt="curso-icon">
                </template>
                <template #curso-name>
                    JavaScript
                </template>
                <template #curso-descripcion>
                    En este curso apreder&aacute;s a usar JavaScript.
                </template>
                <template #curso-duracion>
                    40 horas.
                </template>
            </curso>
        </template>

        <template #curso3>
            <curso>
                <template #curso-img>
                    <img src="../media/php.png" alt="curso-icon">
                </template>
                <template #curso-name>
                    PHP
                </template>
                <template #curso-descripcion>
                    En este curso apreder&aacute;s a usar PHP.
                </template>
                <template #curso-duracion>
                    44 horas.
                </template>
            </curso>
        </template>

    </cursos>


</template>

<style>



</style>