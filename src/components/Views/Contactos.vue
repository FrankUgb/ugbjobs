<template>
  <br />
  <div class="contact-page">
    <h1>Contacta con Nosotros</h1>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Nombre Completo:</label>
        <input v-model="name" type="text" id="name" placeholder="Tu nombre completo" required />
      </div>

      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input v-model="email" type="email" id="email" placeholder="Tu correo electrónico" required />
      </div>

      <div class="form-group">
        <label for="subject">Asunto:</label>
        <input v-model="subject" type="text" id="subject" placeholder="Asunto del mensaje" required />
      </div>

      <div class="form-group">
        <label for="message">Mensaje:</label>
        <textarea v-model="message" id="message" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
      </div>

      <button type="submit">Enviar Mensaje</button>
    </form>
  </div>
  <br />
  <FooterComponent />
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'ContactPage',
  components: {
    FooterComponent,
  },
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  },
  methods: {
    handleSubmit() {
      alert(`Gracias ${this.name}, hemos recibido tu mensaje!`);
    },
  },
};
</script>

<style scoped>
.contact-page {
  max-width: 600px;
  margin: 20px auto; /* Espacio superior e inferior para separación */
  padding: 20px;
  background-color: #D3D3D3; /* Gris claro para el fondo */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #005521; /* Azul principal */
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #1C1C1C; /* Negro carbón para el texto de las etiquetas */
}

input,
textarea {
  width: calc(100% - 22px); /* Ajusta el ancho para el padding y el borde */
  padding: 10px;
  border: 1px solid #50C878; /* Verde esmeralda para los bordes */
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box; /* Asegura que el padding no afecte el ancho total */
}

textarea {
  resize: none; /* Evitar redimensionar el textarea */
}

button {
  width: 100%;
  padding: 12px;
  background-color: #50C878; /* Verde esmeralda para el botón */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #1C1C1C; /* Negro carbón al pasar el mouse */
}
</style>
