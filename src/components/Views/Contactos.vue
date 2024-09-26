<template>
    <div class="contact-page">
      <h1>Contacta con Nosotros</h1>
  
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Nombre Completo:</label>
          <input v-model="name" type="text" id="name" placeholder="Tu nombre completo" required>
        </div>
  
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input v-model="email" type="email" id="email" placeholder="Tu correo electrónico" required>
        </div>
  
        <div class="form-group">
          <label for="subject">Asunto:</label>
          <input v-model="subject" type="text" id="subject" placeholder="Asunto del mensaje" required>
        </div>
  
        <div class="form-group">
          <label for="message">Mensaje:</label>
          <textarea v-model="message" id="message" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
        </div>
  
        <button type="submit">Enviar Mensaje</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        subject: '',
        message: '',
      };
    },
    name: 'ContactPage',  // Asegúrate de que este nombre sea único
    methods: {
      handleSubmit() {
        alert(`Gracias ${this.name}, hemos recibido tu mensaje!`);
        // Aquí podrías agregar lógica para enviar los datos a un backend o API
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }
  
  h1 {
    text-align: center;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    color: #666;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }
  
  button {
    width: 100%;
    padding: 12px;
    background-color: #0288d1;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0277bd;
  }
  </style>
  