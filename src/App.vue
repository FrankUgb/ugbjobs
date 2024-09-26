<template>
  <div id="app">
    <!-- Mostrar u ocultar la barra de navegación según la ruta -->
    <MyNavbar v-if="!isHiddenNavbarPage" />
    <router-view />
  </div>
</template>

<script>
import MyNavbar from './components/MyNavbar.vue'; // Ruta correcta al componente MyNavbar

export default {
  name: 'App',
  components: {
    MyNavbar,
  },
  computed: {
    // Verifica si la ruta actual está en el array de rutas donde quieres ocultar la navbar
    isHiddenNavbarPage() {
      // Definir todas las rutas donde quieras ocultar la navbar
      const hiddenRoutes = ['/registro', '/inicio', ]; 
      
      // Verificar si la ruta actual está en ese array
      return hiddenRoutes.includes(this.$route.path);
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4B4B4B;
  background-color: #D3D3D3;
}
</style>
