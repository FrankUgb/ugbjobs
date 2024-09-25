<template>
  <div id="app">
    <!-- Mostrar la barra de navegación solo si no estamos en la ruta de registro -->
    <MyNavbar v-if="$route.name !== 'RegistroUsuario'" />
    <router-view />
  </div>
</template>

<script>
import MyNavbar from './components/MyNavbar.vue'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'App',
  components: {
    MyNavbar,
  },
}
</script>

<style>

</style>
