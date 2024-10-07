<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Imagen como enlace al inicio -->
      <router-link to="/">
        <img src="../assets/Img/logo1.png" alt="Descripción de la imagen" class="navbar-image" />
      </router-link>
      <div class="navbar-links">
        <ul class="navbar-menu">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/trabajo">Empleos</router-link></li>
          <li><a href="#">Acerca</a></li>
          <li><router-link to="/MiCV">Currículum</router-link></li>
          <li><router-link to="/contactos">Contactos</router-link></li>
        </ul>
        <div class="auth-buttons">
          <router-link to="/registro" class="auth-button">Registro</router-link>
          <router-link to="/login" class="auth-button">Iniciar Sesión</router-link>
        </div>
      </div>
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
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333; /* Gris oscuro para el texto */
  background-color: #D3D3D3; /* Gris claro para el fondo de la página */
}

.navbar {
  background-color: #50C878; /* Verde esmeralda */
  padding: 10px 20px;
  color: white;
}

.navbar-container {
  display: flex;
  justify-content: space-between; /* Mantiene la imagen a la izquierda y los enlaces a la derecha */
  align-items: center;
}

.navbar-image {
  height: 50px; /* Ajusta la altura de la imagen según sea necesario */
  margin-right: 10px; /* Espacio entre la imagen y el menú */
}

.navbar-links {
  display: flex;
  justify-content: space-between; /* Espacio entre los enlaces y los botones de autenticación */
  align-items: center;
  flex-grow: 1; /* Para que ocupe el espacio restante */
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 15px; /* Espacio entre los enlaces */
}

.navbar-menu a {
  color: #333333; /* Gris oscuro para el texto */
  text-decoration: none; /* Sin subrayado */
  transition: opacity 0.3s;
  padding: 10px 0;
}

.navbar-menu a:hover {
  color: #CC5500; /* Naranja quemado al pasar el mouse */
  opacity: 0.8; /* Efecto de opacidad al pasar el mouse */
}

/* Estilos para los botones de Registro e Iniciar Sesión */
.auth-buttons {
  display: flex; /* Mantiene los botones uno al lado del otro */
  gap: 10px; /* Espacio entre los botones */
}

.auth-button {
  background-color: #FFD700; /* Amarillo dorado para los botones */
  color: #1C1C1C; /* Negro carbón para el texto */
  border-radius: 5px; /* Bordes redondeados */
  padding: 10px 15px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;
}

.auth-button:hover {
  background-color: #CC5500; /* Naranja quemado al pasar el mouse */
  color: white; /* Texto blanco al pasar el mouse */
  transform: scale(1.05);
}

/* Acentos para detalles */
.accent {
  color: #FFD700; /* Amarillo dorado */
}

/* Secciones oscuras */
.footer {
  background-color: #1C1C1C; /* Negro carbón */
  color: white;
  padding: 10px;
}
</style>
