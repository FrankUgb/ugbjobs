<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Imagen como enlace al inicio -->
      <router-link to="/">
        <img src="../assets/Img/logo2.png" alt="Descripción de la imagen" class="navbar-image" />
      </router-link>

      <!-- Icono de hamburguesa -->
      <div class="hamburger" @click="toggleMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>

      <div :class="['navbar-links', { 'active': menuActive }]">
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
  name: 'NavbarComponent',
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>

<style scoped>
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
  position: relative;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-image {
  height: 50px;
  margin-right: 10px;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger .line {
  height: 3px;
  width: 25px;
  background-color: white;
  margin: 3px 0;
}

.navbar-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  transition: max-height 0.3s ease-in-out;
}

.navbar-links.active {
  display: flex;
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 15px;
}

.navbar-menu a {
  color: #FFFFFF;
  text-decoration: none;
  transition: opacity 0.3s;
  padding: 10px 0;
}

.navbar-menu a:hover {
  color: #CC5500; /* Naranja quemado */
  opacity: 0.8;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

.auth-button {
  background-color: #FFD700; /* Amarillo dorado */
  color: #1C1C1C; /* Negro carbón */
  border-radius: 5px;
  padding: 10px 15px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;
}

.auth-button:hover {
  background-color: #CC5500; /* Naranja quemado */
  color: white;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .navbar-links {
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #50C878; /* Verde esmeralda */
    display: none;
    flex-direction: column;
    width: 200px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  .navbar-links.active {
    display: flex;
    max-height: 300px;
  }

  .navbar-menu {
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }

  .hamburger {
    display: flex;
  }
}

.accent {
  color: #FFD700;
}

.footer {
  background-color: #1C1C1C;
  color: white;
  padding: 10px;
}
</style>
