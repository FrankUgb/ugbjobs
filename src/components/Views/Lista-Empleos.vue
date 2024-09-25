<template>
  <div class="trabajo-detalle">
    <h1>{{ trabajo.titulo }}</h1>
    <p class="descripcion">{{ trabajo.descripcion }}</p>
    
    <h2>Requisitos</h2>
    <ul>
      <li v-for="requisito in trabajo.requisitos" :key="requisito">{{ requisito }}</li>
    </ul>

    <h2>Cómo Aplicar</h2>
    <p>{{ trabajo.comoAplicar }}</p>

    <button @click="aplicar">Aplicar Ahora</button>
  </div>
</template>

<script>
export default {
  name: 'TrabajoDetalle',
  data() {
    return {
      trabajo: {
        titulo: 'Desarrollador Frontend',
        descripcion: 'Buscamos un desarrollador frontend con experiencia en Vue.js y JavaScript.',
        requisitos: [
          'Experiencia en desarrollo web',
          'Conocimiento en Vue.js',
          'Habilidad para trabajar en equipo',
        ],
        comoAplicar: 'Envía tu CV a info@empresa.com.',
      },
    };
  },
  methods: {
    aplicar() {
      alert('Gracias por tu interés en aplicar. Se te redirigirá al formulario.');
      // Aquí puedes agregar la lógica para redirigir a un formulario de aplicación.
    },
  },
};
</script>

<style scoped>
.trabajo-detalle {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h1 {
  color: #333;
}

.descripcion {
  font-size: 1.1em;
  margin-bottom: 20px;
}

h2 {
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
