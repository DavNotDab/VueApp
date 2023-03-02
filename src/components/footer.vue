
<!-- Componente para el footer de las paginas -->

<template>

    <footer>
        <div class="copy">
            <p><a href="https://github.com/DavNotDab">&copy; DavNotDab</a> - Todos los derechos reservados</p>
        </div>
        <div class="privacy">
            <p>A trav&eacute;s de este sitio web no se recaban datos de car&aacute;cter personal de las personas usuarias sin su conocimiento, ni se ceden a terceros.</p>
            <p>Contacto: +34 657 889 123 | help.cursos@vue.com</p>
        </div>
    </footer>

</template>


<style scoped>

footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 50px 0 0 0;
    padding: 10px;
    background-color: #f1f1f1;
    color: #333;
}

.privacy {
    width: 50%;
    font-size: 0.8em;
    text-align: center;
}

</style>