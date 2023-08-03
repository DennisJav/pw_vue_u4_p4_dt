<template>
    <label for="">CEDULA</label>
    <input v-model="cedula" type="text">
    <label for="">NOMBRE</label>
    <input v-model="nombre" type="text">
    <label for="">APELLIDO</label>
    <input v-model="apellido" type="text">
    <button @click="guardarEstudiante">Guardar</button>
</template>

<script>
import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente.js"
export default {
    data() {
        return {
            cedula: null,
            nombre: null,
            apellido: null,
        };
    },

    methods: {
        async guardarEstudiante() {
            const data = {
                cedula: this.cedula,
                nombre: this.nombre,
                apellido: this.apellido,
                provincia: "Pichincha",
                fechaNacimiento: "1996-01-12T00:00:00"
            }
            await ingresarEstudianteFachada(data);

        },
    },
};
</script>

<style></style>