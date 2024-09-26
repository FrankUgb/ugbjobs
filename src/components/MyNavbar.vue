<template>
    <nav class="navbar">
      <div class="navbar-container">
        <ul class="navbar-menu">
          <li><router-link to="/">Inicio</router-link></li> <!-- Usa router-link -->
          <li><router-link to="/trabajo">Empleos</router-link></li> <!-- Usa router-link -->
          <li><a href="#">Acerca</a></li>
          <li><a href="#">Curriculum</a></li>
          <li><a href="#">Contacto</a></li>
          <li><router-link to="/registro">Registro</router-link></li> <!-- Usa router-link -->
          <li><router-link to="/login">Iniciar Sesion</router-link></li> <!-- Usa router-link -->
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarComponent' // Cambia el nombre aquí
  }
  </script>

<style>
html, body {
  margin: 0; /* Eliminar margen predeterminado del navegador */
  padding: 0; /* Eliminar padding predeterminado del navegador */
  height: 100%; /* Asegurar que ocupen toda la altura */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4B4B4B; /* Gris oscuro para el texto principal */
  background-color: #D3D3D3; /* Gris claro para el fondo de la página */
}

/* Estilos para la barra de navegación */
.navbar {
  background-color: #50C878; /* Verde esmeralda */
  padding: 10px;
  color: white;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navbar-menu a {
  color: white; /* Texto blanco en el menú */
  text-decoration: none; /* Quitar subrayado */
  transition: opacity 0.3s; /* Agregar transición de opacidad */
  padding: 10px 20px; /* Añadir más espacio alrededor del texto */
}

.navbar-menu a:hover {
  opacity: 0.7; /* Cambiar opacidad al pasar el mouse */
}

/* Botones y enlaces */
.search-button, .view-job-button {
  background-color: #CC5500; /* Naranja quemado */
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.search-button:hover, .view-job-button:hover {
  background-color: #FFD700; /* Color más oscuro al pasar el mouse */
}

/* Acentos para detalles */
.accent {
  color: #FFD700; /* Amarillo dorado */
}

/* Secciones oscuras */
.footer {
  background-color: #2B2B2B; /* Negro carbón */
  color: white;
  padding: 10px;
}
</style>