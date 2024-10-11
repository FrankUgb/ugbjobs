<template>
  <div class="cv-container" ref="cvContent">
    <header class="header">
      <h1>Currículum Vitae</h1>
    </header>

    <div class="profile-section">
      <input type="file" @change="handleFileChange" class="file-input" />
      <img :src="profilePhoto" alt="Profile Picture" class="profile-photo" v-if="profilePhoto">
    </div>

    <section class="section basic-info-section">
      <h2>Información Básica</h2>
      <label for="fullName">Nombre Completo:</label>
      <input v-model="fullName" id="fullName" type="text" placeholder="Ingrese su nombre completo" class="plain-input" />
      
      <label for="email">Correo de Contacto:</label>
      <input v-model="email" id="email" type="email" placeholder="Ingrese su correo electrónico" class="plain-input" />
    </section>

    <section class="section academic-section">
      <h2>Información Académica</h2>
      <label for="academicProgress">Progreso Académico:</label>
      <input v-model="academicProgress" id="academicProgress" type="text" placeholder="Ingrese su progreso académico" class="plain-input" />
      
      <label for="cum">CUM:</label>
      <input v-model="cum" id="cum" type="text" placeholder="Ingrese su CUM" class="plain-input" />
    </section>

    <section class="section professional-section">
      <h2>Objetivo Profesional</h2>
      <label for="professionalGoal">Escriba su objetivo profesional:</label>
      <textarea v-model="professionalGoal" id="professionalGoal" placeholder="Escriba su objetivo profesional" class="plain-textarea"></textarea>
    </section>

    <section class="section skills-section">
      <h2>Habilidades</h2>
      <label for="technicalSkills">Habilidades Técnicas:</label>
      <input v-model="technicalSkills" id="technicalSkills" placeholder="Ingrese sus habilidades técnicas (separar con comas)" class="plain-input" />

      <label for="softSkills">Habilidades Blandas:</label>
      <input v-model="softSkills" id="softSkills" placeholder="Ingrese sus habilidades blandas (separar con comas)" class="plain-input" />
    </section>

    <div class="buttons">
      <button @click="handleSaveCv" class="cta-button">Guardar Currículum</button>
      <button @click="downloadPdf" class="cta-button">Descargar como PDF</button>
    </div>
  </div><br>
  <FooterComponent />
</template>

<script>
import html2pdf from 'html2pdf.js';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'MiCurriculum',
  components: {
    FooterComponent,
  },
  data() {
    return {
      profilePhoto: '',
      fullName: '',
      email: '',
      academicProgress: '',
      cum: '',
      professionalGoal: '',
      technicalSkills: '',
      softSkills: '',
    };
  },
  methods: {
    handleSaveCv() {
      alert('Currículum guardado');
    },
    handleFileChange(e) {
      const file = e.target.files[0];
      this.profilePhoto = URL.createObjectURL(file);
    },
    downloadPdf() {
      const element = this.$refs.cvContent;
      html2pdf()
        .from(element)
        .save('curriculum.pdf');
    }
  }
};
</script>

<style scoped>
.cv-container {
  background-color: #D3D3D3; /* Gris claro para el fondo del contenedor */
  padding: 20px;
  border-radius: 10px;
  max-width: 700px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: 'Arial', sans-serif;
  color: #333333; /* Gris oscuro para el texto */
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

h1 {
  color: #005521; /* Azul oscuro para el título */
}

.profile-section {
  text-align: center;
  margin-bottom: 20px;
}

.file-input {
  margin-bottom: 10px;
}

.profile-photo {
  width: 100px; 
  height: 100px; 
  border-radius: 50%;
  border: 3px solid #50C878; /* Verde esmeralda */
  margin-top: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.plain-input,
.plain-textarea {
  display: block;
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #CCCCCC; /* Gris claro para los bordes */
  border-radius: 5px;
  width: calc(100% - 22px); /* Ajusta el ancho para el padding y el borde */
  font-size: 14px;
  background-color: #FFFFFF; /* Blanco para el fondo de los inputs */
  color: #333333; /* Gris oscuro para el texto */
}

.plain-input:focus,
.plain-textarea:focus {
  outline: none;
  border-color: #59e487; /* Azul oscuro al enfocar */
}

.plain-textarea {
  resize: none;
  min-height: 100px;
}

label {
  font-weight: bold;
  margin-top: 10px; /* Espacio superior para separar del elemento anterior */
  margin-bottom: 5px; /* Espacio inferior para separar del campo */
  display: block;
  color: #1C1C1C; /* Negro carbón */
}

.section {
  border: 1px solid #50C878; /* Verde esmeralda */
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #FFFFFF; /* Blanco para el fondo de cada sección */
  box-sizing: border-box; /* Asegura que el padding no afecte el ancho total */
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.cta-button {
  background-color: #CC5500; /* Naranja quemado */
  color: #FFFFFF;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  flex: 1;
  margin-right: 10px;
}

.cta-button:last-child {
  margin-right: 0;
}

.cta-button:hover {
  background-color: #FFD700; /* Amarillo dorado al pasar el mouse */
  transform: scale(1.05);
}
</style>
