
<!-- Componente que carga el formulario para añadir un nuevo curso -->

<script setup>

// Para subir archivos a firebase storage
import {ref} from "vue";
import {getDownloadURL, getStorage, ref as refStrg, uploadBytes} from "firebase/storage";
import {db} from "@/firebase";

// Para editar documentos en firebase firestore
import {doc, updateDoc, addDoc, collection, deleteField} from "firebase/firestore";

let file = ref("");

// Sube un archivo a firebase storage
function subirArchivo() {
    const storage = getStorage();
    const storageRef = refStrg(storage, file.value.files[0].name);
    uploadBytes(storageRef, file.value.files[0]).then(() => {
        console.log('Uploaded a blob or file!');
        getDownloadURL(storageRef)
            .then((url) => {
                console.log(url);
            })
    });
}

// Agrega un nuevo curso a la base de datos
async function nuevoCurso() {
    let categoria = document.getElementById("categoria").value;
    let nombre = document.getElementById("nombre").value;
    let horas = document.getElementById("horas").value;
    let descripcion = document.getElementById("descripcion").value;
    let imagen = document.getElementById("imagen").value;

    const docRef = await addDoc(collection(db, "cursos"), {
        categoria: categoria,
        nombre: nombre,
        horas: horas,
        descripcion: descripcion,
        imagen: imagen
    });
    console.log("Document written with ID: ", docRef.id);
}

// Actualiza un curso en la base de datos
async function actualizarCurso() {
    const docRef = doc(db, "cursos");
    await updateDoc(docRef, {
        categoria: "programacion",
        nombre: "Curso de programacion",
        horas: 100,
        descripcion: "Curso de programacion",
        imagen: "programacion.png"
    });
    console.log("Document updated");
}


// Borra un curso de la base de datos
async function borrarCurso() {
    const cursoRef = doc(db, 'cursos');

    await updateDoc(cursoRef, {
        ofimatica: deleteField()
    });
}
</script>

<template>
    <!--Fieldset donde colocamos inputs para rellenar los datos necesarios para crear un curso-->
    <fieldset>
        <h3>Nuevo Curso: </h3><br>
        <label for="categoria">Categoria: </label>

        <!--Mostramos las categorías disponibles-->
        <select name="categoria" id="categoria">
            <option value="programacion">Programación</option>
            <option value="SOs">Sistemas Operativos</option>
            <option value="ofimatica">Ofimatica</option>
        </select>
        <br><br>

        <label for="nombre">Nombre: </label>
        <input type="text" name="nombre" id="nombre" /><br><br>

        <label for="descripcion">Descripci&oacute;n: </label>
        <input type="text" name="descripcion" id="descripcion" /><br><br>

        <label for="horas">Horas: </label>
        <input type="number" min="10" max="999" name="horas" id="horas" /><br><br>

        <label for="imagen">Imagen: </label>
        <!--Este input nos subirá la imagen que se coloque a firestore-->
        <input type="file" name="file" id="imagen" ref="file" @change="subirArchivo()">
        <br><br>

        <button @click="nuevoCurso()">Crear Curso</button>
        <button @click="actualizarCurso()">Actualizar Curso</button>
        <button @click="borrarCurso()">Borrar Curso</button>
    </fieldset>
</template>
