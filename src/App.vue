<template>
  <body>
    
    

    <div class="container">
      <h1>ESTUDIANTES</h1>
      <div class="contenedor">
        <NavBar></NavBar>
        <router-view></router-view>
      </div>
    </div>
  </body>



  <!--
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Consultar Estudiante </h1>
  <Estudiante/>
  <br>
  <h1>Guarda Estudiante</h1>
  <GuardarEstudiante/>
  <h1>Actualizar Estudiante</h1>
  <ActualizarEstudiante/>
  <h1>Eliminar Estudiante</h1>
  <EliminarEstudiante/>
-->
</template>

<script>
import NavBar from './modules/estudiante/components/NavBar.vue'
//import Estudiante from './modules/estudiante/pages/ConsultaEstudiante.vue'
//import GuardarEstudiante from './modules/estudiante/pages/GuardaEstudiante.vue'
//import ActualizarEstudiante from './modules/estudiante/pages/ActualizarEstudiante.vue'
//import EliminarEstudiante from './modules/estudiante/pages/EliminarEstudiante.vue'

export default {
  name: 'App',
  components: {
    // Estudiante,
    // GuardarEstudiante,
    // ActualizarEstudiante,
    // EliminarEstudiante,
    NavBar
  }
}
</script>



<style>
h1{
  color: #000000;
}
body{
  background-color: #b0d6ff; 
}

.contenedor {
  position: relative;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
