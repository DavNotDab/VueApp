<script setup>
import Curso from "@/components/curso.vue";
</script>

<template>
    <div class="body-content">
        <h1 class="titulo">
            <slot name="titulo"></slot>
        </h1>
        <div class="cursos">
            <slot>
                <curso>

                </curso>
            </slot>

        </div>
    </div>
</template>

<style>
.titulo {
    margin: 20px 0;
}

.cursos {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

</style>