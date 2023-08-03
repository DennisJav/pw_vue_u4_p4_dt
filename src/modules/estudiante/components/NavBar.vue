<template>
  <div class="container">
    <div>
      <router-link to="/guarda">Guardar</router-link>
      <router-link to="/actualiza">Actualizar</router-link>
      <router-link to="/consulta"  >Consultar</router-link>
      <router-link to="/elimina">Eliminar</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
  text-align: center;
  margin-top: 25px;
}

a{
  text-decoration: wavy;
  background-color:#17233d;
  border-radius: 5px;
  padding: 8px;
}

div {
  align-items: center;
}

div a {
  font-weight: bold;
  color: #b0d6ff;
  margin: 0 10px;
  font-size: 25px;
}
</style>