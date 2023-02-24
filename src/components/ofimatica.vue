<script setup>
import Cursos from "@/components/cursos.vue";
import Curso from "@/components/curso.vue";
</script>

<template>

    <cursos>
        <template #titulo>
            Cursos de ofim&aacute;tica
        </template>

        <template #curso1>
            <curso>
                <template #curso-img>
                    <img src="../media/word.png" alt="curso-icon">
                </template>
                <template #curso-name>
                    Word
                </template>
                <template #curso-descripcion>
                    En este curso apreder&aacute;s a usar Word.
                </template>
                <template #curso-duracion>
                    20 horas.
                </template>
            </curso>
        </template>

        <template #curso2>
            <curso>
                <template #curso-img>
                    <img src="../media/excel.png" alt="curso-icon">
                </template>
                <template #curso-name>
                    Excel
                </template>
                <template #curso-descripcion>
                    En este curso apreder&aacute;s a usar Excel.
                </template>
                <template #curso-duracion>
                    28 horas.
                </template>
            </curso>
        </template>

        <template #curso3>
            <curso>
                <template #curso-img>
                    <img src="../media/powerpoint.png" alt="curso-icon">
                </template>
                <template #curso-name>
                    PowerPoint
                </template>
                <template #curso-descripcion>
                    En este curso apreder&aacute;s a usar PowerPoint.
                </template>
                <template #curso-duracion>
                    24 horas.
                </template>
            </curso>
        </template>

    </cursos>


</template>

<style>



</style>