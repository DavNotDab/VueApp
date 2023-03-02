
<!-- Componente de la pagina de bienvenida -->

<script setup>
import WelcomeItem from './WelcomeItem.vue'
import IconSupport from "@/components/icons/IconSupport.vue";
</script>

<template>

  <WelcomeItem>
        <template #icon>
            <icon-support />
        </template>

      <template #heading>
          <h1>Bienvenido</h1>
      </template>

  </WelcomeItem>

    <div class="bienvenida">
        <section class="texto">
            <article>
                <h2>Esta es una web de cursos online</h2>
                <p>Te ense&ntilde;amos cosas relacionadas con la inform&aacute;tica para que desarrolles tu carrera tecnol&oacute;gica.</p>
            </article>
            <p>Este es un proyecto de Vue realizado para la asignatura de Desarrollo Web en Entorno Cliente.</p>
            <p>Aqu&iacute; debemos mostrar que sabemos hacer algo con Vue. Aunque sea muy simple.</p>
        </section>
        <section class="imagen">
            <img src="../media/bienvenida2.png" alt="Logo-Bienvenida">
        </section>
    </div>

</template>

<style>

.bienvenida {
    display: grid;
    grid-template-columns: 48% 48%;
    grid-gap: 4%;
}

.imagen img {
    width: 350px;
}

</style>