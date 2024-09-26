<template>
  <div>
    <!-- Contenedor de Búsqueda -->
    <div class="search-container">
      <h1 class="accent">Buscar Empleo</h1>
      <div class="search-bar">
        <input type="text" placeholder="Empleo" class="search-input" />
        <input type="text" placeholder="Ubicación" class="search-input" />
        <button class="search-button">Buscar Trabajo</button>
      </div>
    </div>

    <!-- Nuevo div para una imagen -->
    <div class="image-container">
      <img src="../assets/Img/Proceso.png" alt="Descripción de la imagen" />
    </div>

    <!-- Trabajos Recientes -->
    <div class="recent-jobs-container">
      <h1 class="accent">Trabajos Recientes</h1>
      <div class="job-list">
        <div class="job-item">
          <h4>Vigilante en el CECOT (Tiempo Completo)</h4>
          <p><strong>Empresa:</strong> Policía Nacional</p>
          <p><strong>Ubicación:</strong> CECOT</p>
          <p><strong>Salario:</strong> $1,000/mes</p>
          <router-link to="/empleo" class="view-job-button">Ver Empleo</router-link>
        </div>

        <div class="job-item">
          <h4>Bar Tender (Medio Tiempo)</h4>
          <p><strong>Empresa:</strong> Can Can Studio</p>
          <p><strong>Ubicación:</strong> San Miguel</p>
          <p><strong>Salario:</strong> $700/mes</p>
          <a href="#" class="view-job-button">Ver Empleo</a>
        </div>

        <div class="job-item">
          <h4>Gestor de Proyectos (Tiempo Completo)</h4>
          <p><strong>Empresa:</strong> Grupo La Constancia</p>
          <p><strong>Ubicación:</strong> San Salvador</p>
          <p><strong>Salario:</strong> $800/mes</p>
          <a href="#" class="view-job-button">Ver Empleo</a>
        </div>
      </div>
    </div>

    <!-- Carrusel de Imágenes -->
    <ImageCarousel />
  </div>
</template>

<script>
import ImageCarousel from './ImageCarousel.vue'; // Asegúrate de que la ruta es correcta

import '../assets/Css/HomeComponent.css'; // Importar el archivo CSS

export default {
  name: 'HomeComponent',
  components: {
    ImageCarousel, // Registrar el componente aquí
  },
};
</script>
