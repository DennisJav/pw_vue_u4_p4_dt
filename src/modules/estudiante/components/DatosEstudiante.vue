<template>
    <div class="datosConsultar">
        <input v-model="cedula" type="text">
        <button @click="consultarEstudiante">Consultar</button>
    </div>
    <div class="resultado">
        <label for="">NOMBRE</label>
        <input v-model="nombre" type="text">
        <label for="">APELLIDO</label>
        <input v-model="apellido" type="text">
    </div>
</template>


<script>
import { obtenerEstudianteFachada } from "../helpers/EstudianteCliente.js"
export default {
    data() {
        return {
            cedula: null,
            nombre: null,
            apellido: null,
        };
    },

    methods: {
        async consultarEstudiante() {
            const data = await obtenerEstudianteFachada(this.cedula);
            this.nombre = data.nombre;
            this.apellido = data.apellido;
        },
    },
};
</script>

<style>

.datosConsultar {
    padding: 5px;
}
.resultado{
    padding: 5pxs;
}


</style>