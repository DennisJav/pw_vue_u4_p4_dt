<template>
    <label for="">ID</label>
    <input v-model="id" type="text">
    <label for="">CEDULA</label>
    <input v-model="cedula" type="text">
    <label for="">NOMBRE</label>
    <input v-model="nombre" type="text">
    <label for="">APELLIDO</label>
    <input v-model="apellido" type="text">
    <button @click="actualizarEstudiante">Actualizar</button>
</template>

<script>
import { actualizarEstudianteFachada } from "../helpers/EstudianteCliente.js"
export default {
    data() {
        return {
            id:null,
            cedula: null,
            nombre: null,
            apellido: null,
        };
    },

    methods: {
        async actualizarEstudiante() {
            const data = {
                cedula: this.cedula,
                nombre: this.nombre,
                apellido: this.apellido,
                provincia: "Pichincha",
                fechaNacimiento: "1996-01-12T00:00:00"
            }
            await actualizarEstudianteFachada(data,this.id);

        },
    },
};
</script>

<style></style>