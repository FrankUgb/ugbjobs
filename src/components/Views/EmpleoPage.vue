<template>
  <div class="job-details">
    <header class="job-header">
      <h1>Vigilante del CECOT</h1>
      <p class="company-name">Centro Del Confinamiento de Terrorismo CECOT</p>
      <div class="job-info">
        <span class="job-location">Ubicación: Santa Ana, El Salvador</span>
        <span class="job-type">Tipo de empleo: Tiempo completo</span>
      </div>
    </header>

    <section class="job-description">
      <h2>Descripción del Puesto</h2>
      <p>
        Como Vigilante del CECOT, serás responsable de la seguridad y el bienestar de
        las instalaciones, garantizando un entorno seguro para estudiantes y personal.
      </p>
    </section>

    <section class="job-requirements">
      <h2>Requisitos</h2>
      <ul>
        <li>Experiencia en seguridad.</li>
        <li>Certificación en primeros auxilios.</li>
        <li>Disponibilidad para turnos rotativos.</li>
        <li>Buenas habilidades de comunicación.</li>
      </ul>
    </section>


    <section class="job-benefits">
      <h2>Beneficios</h2>
      <ul>
        <li>Salario: $1,200 - $1,500/mes.</li>
        <li>Formación continua.</li>
        <li>Seguro médico y de vida.</li>
        <li>Turnos rotativos de 8 horas.</li>
        <li>Ambiente colaborativo.</li>
      </ul>
    </section>

    <section class="application-form">
      <h2>Formulario de Solicitud</h2>
      <form @submit.prevent="submitApplication">
        <div class="input-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="applicant.name" placeholder="Ingresa tu nombre" required />
        </div>

        <div class="input-group">
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" v-model="applicant.email" placeholder="Ingresa tu correo electrónico" required />
        </div>

        <div class="input-group">
          <label for="resume">Currículum (opcional):</label>
          <input type="file" id="resume" @change="handleFileUpload" />
        </div>

        <button type="submit">Enviar Solicitud</button>
      </form>
    </section>
  </div>

<!-- Footer -->
<FooterComponent /> <!-- Componente de Footer agregado aquí -->
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'; // Importa el componente Footer

export default {
  name: 'EmpleoPage',
  components: {
    FooterComponent, // Asegúrate de registrar el componente aquí
  },
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
      console.log('Solicitud enviada:', this.applicant);
      this.resetForm();
    },
    resetForm() {
      this.applicant = { name: '', email: '', resume: null };
    },
  },
}
</script>
<style src="../../assets/Css/Trabajo.css"></style>