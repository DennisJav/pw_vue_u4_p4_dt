<template>
    <div class="container">
        <input v-model="id" type="text" placeholder="Inserte ID para eliminar">
        <button class="btn btn-primary" @click="eliminarEstudiante">Eliminar</button>
    </div>
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

<style scoped>
button {
    margin: 20px;
    border-radius: 5px;
    border: 1px;
    padding: 10px;
    font-size: 15px;
}


input {
    border: 0px;
    border-bottom: 1px solid black;
    outline: 0;

}

input :focus {
    outline: none;
}

input :hover {
    background-color: beige;
}
</style>