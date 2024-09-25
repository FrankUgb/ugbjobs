<template>
  <div class="job-details">
    <header class="job-header">
      <h1>Vigilante del CECOT</h1>
      <p class="company-name">Centro Del Confinamiento de Terrorismo CECOT</p>
      <p class="job-location">Ubicación: Santa Ana, El Salvador</p>
      <p class="job-type">Tipo de empleo: Tiempo completo</p>
    </header>

    <section class="job-description">
      <h2>Descripción del Puesto</h2>
      <p>
        Como Vigilante del CECOT, serás responsable de la seguridad y el bienestar de
        las instalaciones. Tu papel es esencial para garantizar un entorno seguro
        para estudiantes y personal.
      </p>
    </section>

    <section class="job-requirements">
      <h2>Requisitos</h2>
      <ul>
        <li>Experiencia previa en seguridad o roles similares.</li>
        <li>Certificación en primeros auxilios.</li>
        <li>Disponibilidad para trabajar en turnos rotativos.</li>
        <li>Excelentes habilidades de comunicación.</li>
      </ul>
    </section>

    <section class="job-benefits">
      <h2>Beneficios</h2>
      <ul>
        <li>Salario competitivo.</li>
        <li>Oportunidades de formación continua.</li>
        <li>Seguro médico y de vida.</li>
        <li>Ambiente de trabajo colaborativo.</li>
      </ul>
    </section>

    <section class="application-form">
      <h2>Formulario de Solicitud</h2>
      <form @submit.prevent="submitApplication">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="applicant.name" required />

        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="applicant.email" required />

        <label for="resume">Currículum (opcional):</label>
        <input type="file" id="resume" @change="handleFileUpload" />

        <button type="submit">Enviar Solicitud</button>
      </form>
    </section>
  </div>
</template>

<script>
import '../../assets/Css/Trabajo.css';

export default {
  name: 'EmpleoPage',
  data() {
    return {
      applicant: {
        name: '',
        email: '',
        resume: null,
      },
    };
  },
  methods: {
    handleFileUpload(event) {
      this.applicant.resume = event.target.files[0];
    },
    submitApplication() {
      // Lógica para enviar la solicitud
      console.log('Solicitud enviada:', this.applicant);
      // Aquí puedes agregar la lógica para enviar la información a un servidor
    },
  },
}
</script>

<style scoped>
.job-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.job-header {
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #50C878; /* Verde esmeralda */
}

.company-name {
  font-weight: bold;
  font-size: 1.2em;
  color: #4B4B4B;
}

.job-location,
.job-type {
  font-size: 0.9em;
  color: #777;
}

.job-description,
.job-requirements,
.job-benefits,
.application-form {
  margin: 20px 0;
}

h2 {
  border-bottom: 2px solid #50C878;
  padding-bottom: 5px;
  color: #50C878;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin: 10px 0 5px;
}

input[type="text"],
input[type="email"],
input[type="file"] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
}

button {
  padding: 10px;
  background-color: #50C878;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45b369; /* Un poco más oscuro al pasar el mouse */
}
</style>
