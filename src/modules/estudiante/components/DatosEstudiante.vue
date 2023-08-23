<template>
    <div class="container">

        <div class="datosConsultar">
            <input v-model="cedula" type="text" placeholder="Inserte cedula del Estudiante">
            <button @click="consultarEstudiante">Consultar</button>
        </div>

        <div class="resultado">
            <h4>Estudiante Consultado:</h4>
            <table>
                <tr>
                    <td>
                        <label for="">NOMBRE</label>
                    </td>
                    <td>
                        <input v-model="nombre" type="text" readonly="true">
                    </td>

                </tr>
                <tr>
                    <td>
                        <label for="">APELLIDO</label>
                    </td>
                    <td>
                        <input v-model="apellido" type="text" readonly="true">
                    </td>
                </tr>
            </table>

        </div>

    </div>
</template>


<script>
import { obtenerEstudianteFachadaApiAxios } from "../helpers/EstudianteCliente.js"
export default {
    data() {
        return {
            cedula: this.$route.params.cedula,
            nombre: null,
            apellido: null,
        };
    },

    methods: {
        async consultarEstudiante() {
            const data = await obtenerEstudianteFachadaApiAxios(this.cedula);
            this.nombre = data.nombre;
            this.apellido = data.apellido;
        },
    },

    mounted() {
        const { ced } = this.$route.params;
        console.log(ced);
        this.cedula=ced;
   
        //const prov = this.$route.query.provincia;
        //const {prov1}= this.$route.query;
        // /estudiante?provincia=pichincha&ciudad=quito
        console.log('----------------------');
        this.consultarEstudiante();
    },

};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    display: grid;
    align-items: center;
}

button {
    margin: 20px;
    border-radius: 5px;
    border: 1px;
    padding: 10px;
    font-size: 15px;
}


.datosConsultar input {
    border: 0px;
    border-bottom: 1px solid black;
    outline: 0;
}



.resultado input {
    border: 0px;
    outline: 0;
}

.datosConsultar {
    padding: 5px;
}

.resultado {
    padding: 5pxs;
}
</style>