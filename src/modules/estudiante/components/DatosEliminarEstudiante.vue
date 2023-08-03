<template>
    <input v-model="id" type="text">
    <button @click="eliminarEstudiante">Eliminar</button>
</template>

<script>
import { elminarEstudianteFachada } from "../helpers/EstudianteCliente.js"
export default {
    data() {
        return {
            id: null,
            cedula: null,
            nombre: null,
            apellido: null,
        };
    },

    methods: {
        async eliminarEstudiante() {
            const data = elminarEstudianteFachada(this.id);
            this.id = data.id
            this.cedula = data.cedula
            this.nombre = data.nombre
            this.apellido = data.apellido
            console.log(data);
        },
    },
};
</script>

<style></style>