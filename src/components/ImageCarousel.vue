<template>
  <div class="carousel">
    <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carousel-item" v-for="(item, index) in images" :key="index">
        <img :src="item.image" alt="Imagen de carrusel" />
        <div class="carousel-caption">{{ item.caption }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCarousel',
  data() {
    return {
      currentIndex: 0,
      images: [
        { image: require('../assets/Img/carrusel/noti1.png'), caption: 'Noticia 1: State of Play fue ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ .' },
        { image: require('../assets/Img/carrusel/noti2.jpg'), caption: 'Noticia 2: IGN calificó a Zelda: Echoes of Wisdom con un 9, pero ¿dónde lo ubicaría respecto al resto de la serie?' },
        { image: require('../assets/Img/carrusel/noti3.png'), caption: 'Noticia 3: Meta Quest 3S está disponible para reservar en Amazon por $299,99 y sale a la venta el 15 de octubre.' },
        { image: require('../assets/Img/carrusel/noti4.png'), caption: 'Noticia 4: Capcom ha publicado los requisitos del sistema para PC de Monster.' },
        { image: require('../assets/Img/carrusel/noti5.png'), caption: 'Noticia 5: Ubisoft se cae a pedazos, GRACIAS A DIOS.' },
      ],
    };
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(this.nextImage, 5000); // Cambia cada 5 segundos
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
    },
  },
  mounted() {
    this.startAutoSlide(); // Inicia el carrusel automático al montar el componente
  },
  beforeUnmount() {
    this.stopAutoSlide(); // Detiene el carrusel automático al destruir el componente
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 1050px; /* Aumenta el tamaño máximo del carrusel */
  margin: auto;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%; /* Cada imagen ocupa el 100% del carrusel */
  position: relative; /* Necesario para posicionar la leyenda */
}

.carousel-item img {
  width: 100%; /* La imagen ocupa el 100% de su contenedor */
  height: auto; /* Mantiene la proporción de la imagen */
  max-width: none; /* Permite que la imagen sea más ancha que el contenedor si es necesario */
}

.carousel-caption {
  position: absolute;
  bottom: 10%; /* Ajusta según sea necesario */
  left: 50%;
  transform: translateX(-50%);
  color: white; /* Cambia el color del texto según tu preferencia */
  background-color: rgba(0, 0, 0, 0.842); /* Fondo más opaco para el texto */
  padding: 20px; /* Aumenta el padding para más espacio alrededor del texto */
  border-radius: 5px; /* Bordes redondeados */
  text-align: center; /* Centra el texto */
  font-size: 2.rem; /* Aumenta el tamaño del texto */
}

.carousel-button {
  display: none; /* Oculta las flechas de dirección */
}

</style>
