<template> 
  <div class="cv-container" ref="cvContent">
    <header class="header">
      <h1>Currículum Vitae</h1>
    </header>

    <div class="profile-section">
      <input type="file" @change="handleFileChange" class="file-input" />
      <img :src="profilePhoto" alt="Profile Picture" class="profile-photo" v-if="profilePhoto">
    </div>

    <div class="basic-info-section section">
      <label for="fullName">Nombre Completo:</label>
      <input v-model="fullName" id="fullName" type="text" placeholder="Ingrese su nombre completo" class="plain-input" />
      
      <label for="email">Correo de Contacto:</label>
      <input v-model="email" id="email" type="email" placeholder="Ingrese su correo electrónico" class="plain-input" />
    </div>

    <div class="academic-section section">
      <label for="academicProgress">Progreso Académico:</label>
      <input v-model="academicProgress" id="academicProgress" type="text" placeholder="Ingrese su progreso académico" class="plain-input" />
      
      <label for="cum">CUM:</label>
      <input v-model="cum" id="cum" type="text" placeholder="Ingrese su CUM" class="plain-input" />
    </div>

    <div class="professional-section section">
      <label for="professionalGoal">Objetivo Profesional:</label>
      <textarea v-model="professionalGoal" id="professionalGoal" placeholder="Escriba su objetivo profesional" class="plain-textarea"></textarea>
    </div>

    <div class="skills-section section">
      <label for="technicalSkills">Habilidades Técnicas:</label>
      <input v-model="technicalSkills" id="technicalSkills" placeholder="Ingrese sus habilidades técnicas (separar con comas)" class="plain-input" />

      <label for="softSkills">Habilidades Blandas:</label>
      <input v-model="softSkills" id="softSkills" placeholder="Ingrese sus habilidades blandas (separar con comas)" class="plain-input" />
    </div>

    <div class="buttons">
      <button @click="handleSaveCv" class="cta-button">Guardar Currículum</button>
      <button @click="downloadPdf" class="cta-button">Descargar como PDF</button>
    </div>
  </div>
   <!-- Agrega el componente del footer aquí -->
   <FooterComponent />
</template>

<script>
import html2pdf from 'html2pdf.js';
import FooterComponent from '@/components/FooterComponent.vue'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'MiCurriculum',  
  components: {
    FooterComponent, // Registra el componente
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
  background-color: #e0e0e0; /* Fondo gris claro */
  padding: 20px;
  border-radius: 10px;
  max-width: 700px;
  margin: auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  color: #333; /* Texto gris oscuro */
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

h1 {
  color: #2ecc71; /* Verde esmeralda */
}

.profile-section {
  text-align: center;
  margin-bottom: 20px;
}

.file-input {
  margin-bottom: 10px;
}

.profile-photo {
  width: 100px; /* Tamaño ajustado */
  height: 100px; /* Tamaño ajustado */
  border-radius: 50%;
  border: 2px solid #2ecc71; /* Verde esmeralda */
  margin-top: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.plain-input, .plain-textarea {
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc; /* Solo borde inferior */
  width: 100%;
  font-size: 14px;
  background-color: transparent; /* Fondo transparente */
  color: #333; /* Texto gris oscuro */
}

.plain-input:focus, .plain-textarea:focus {
  outline: none; /* Sin contorno */
  border-bottom-color: #2ecc71; /* Verde esmeralda en el borde inferior */
}

.plain-textarea {
  resize: none; /* Sin opción de redimensionar */
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

.section {
  border: 1px solid #2ecc71; /* Verde esmeralda */
  border-radius: 5px;
  padding: 15px; /* Espaciado interno */
  margin-bottom: 20px; /* Espaciado entre secciones */
  background-color: #ffffff; /* Fondo blanco para secciones */
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.cta-button {
  background-color: #e67e22; /* Naranja quemado */
  color: white;
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
  background-color: #d35400; /* Naranja más oscuro */
  transform: scale(1.03);
}
</style>
