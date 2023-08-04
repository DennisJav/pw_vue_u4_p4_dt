<template>
    <DatosEstudiante/>
</template>

<script>
import DatosEstudiante from '../components/DatosEstudiante.vue'
export default {
    components: {
        DatosEstudiante
    },

mounted(){
    const {ced}= this.$route.params;
    console.log(ced);
    console.log(this.$route);
    //http://localhost:8081/#/busca/172133?nombre=input&apellido=ortiz&edad=23
},

};
</script>

<style></style>