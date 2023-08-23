<template>
    <div class="container">
        <table>
            <tr>
                <td>
                    <label for="">ID</label>
                </td>
                <td>
                    <input v-model="id" type="text" >
                </td>
            </tr>
            <tr>
                <td>
                    <label for="">CEDULA</label>
                </td>
                <td>
                    <input v-model="cedula" type="text">
                </td>
            </tr>

            <tr>
                <td>
                    <label for="">NOMBRE</label>
                </td>
                <td>
                    <input v-model="nombre" type="text">
                </td>
            </tr>

            <tr>
                <td>
                    <label for="">APELLIDO</label>
                </td>
                <td>
                    <input v-model="apellido" type="text">
                </td>
            </tr>
        </table>           
            <button class="btn btn-primary" @click="actualizarEstudiante">Actualizar</button>

    </div>
</template>

<script>
import { actualizarEstudianteFachada } from "../helpers/EstudianteCliente.js"
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
        async actualizarEstudiante() {
            const data = {
                cedula: this.cedula,
                nombre: this.nombre,
                apellido: this.apellido,
                provincia: "Pichincha",
                fechaNacimiento: "1996-01-12T00:00:00"
            }
            await actualizarEstudianteFachada(data, this.id);

        },
    },
};
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    display: grid;
    align-items: center;
}

td{
    text-align: right;

}


button{
    margin: 20px;
    border-radius: 5px;
    border: 1px;
    padding: 10px;
    font-size: 15px;
}

input{
    border: 0px;
    border-bottom: 1px solid black;
    outline: 0;
    
}



input :focus{
    outline: none;
}

input :hover{
    background-color: beige;
}



</style>