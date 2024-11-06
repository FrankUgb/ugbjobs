<template>
  <div class="cv-container" ref="cvContent">
    <header class="header">
      <h1>Currículum Vitae</h1>
    </header>

    <div class="profile-section">
      <input type="file" @change="handleFileChange" class="file-input" />
      <img :src="profilePhoto" alt="Profile Picture" class="profile-photo" v-if="profilePhoto" />
    </div>

    <section class="section basic-info-section">
      <h2>Información Básica</h2>
      <label for="fullName">Nombre Completo:</label>
      <input v-model="fullName" id="fullName" type="text" placeholder="Ingrese su nombre completo" required />

      <label for="email">Correo de Contacto:</label>
      <input v-model="email" id="email" type="email" placeholder="Ingrese su correo electrónico" required />
    </section>

    <section class="section academic-section">
      <h2>Información Académica</h2>
      <label for="academicProgress">Progreso Académico:</label>
      <input v-model="academicProgress" id="academicProgress" type="text" placeholder="Ingrese su progreso académico" required />

      <label for="cum">CUM:</label>
      <input v-model="cum" id="cum" type="text" placeholder="Ingrese su CUM" required />
    </section>

    <section class="section professional-section">
      <h2>Objetivo Profesional</h2>
      <label for="professionalGoal">Escriba su objetivo profesional:</label>
      <textarea v-model="professionalGoal" id="professionalGoal" placeholder="Escriba su objetivo profesional" required></textarea>
    </section>

    <section class="section skills-section">
      <h2>Habilidades</h2>
      <label for="technicalSkills">Habilidades Técnicas:</label>
      <input v-model="technicalSkills" id="technicalSkills" placeholder="Ingrese sus habilidades técnicas (separar con comas)" required />

      <label for="softSkills">Habilidades Blandas:</label>
      <input v-model="softSkills" id="softSkills" placeholder="Ingrese sus habilidades blandas (separar con comas)" required />
    </section>

    <div class="buttons">
      <button @click="handleSaveCv" class="cta-button">Guardar Currículum</button>
      <button @click="downloadAndSavePdf" class="cta-button">Descargar como PDF</button>
    </div>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/firebase.js";
import html2pdf from 'html2pdf.js';

export default {
  name: 'MiCurriculum',
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
    async handleSaveCv() {
      if (this.areFieldsValid()) {
        try {
          // Generar el PDF
          const pdfBlob = await this.generatePdfBlob();
          const pdfRef = storageRef(storage, `curriculums/${this.fullName}.pdf`);
          
          // Subir el PDF a Firebase Storage
          await uploadBytes(pdfRef, pdfBlob);
          const pdfUrl = await getDownloadURL(pdfRef);

          // Guardar datos en Firestore
          await addDoc(collection(db, "curriculums"), {
            fullName: this.fullName,
            email: this.email,
            academicProgress: this.academicProgress,
            cum: this.cum,
            professionalGoal: this.professionalGoal,
            technicalSkills: this.technicalSkills,
            softSkills: this.softSkills,
            profilePhoto: this.profilePhoto,
            pdfUrl: pdfUrl
          });

          alert("Currículum guardado con éxito!");
          this.$router.push('/anuncios');
        } catch (error) {
          console.error("Error al guardar el currículum:", error.message);
          alert(`Ocurrió un error al guardar el currículum: ${error.message}`);
        }
      } else {
        alert("Por favor, completa todos los campos obligatorios.");
      }
    },

    handleFileChange(e) {
      const file = e.target.files[0];
      this.profilePhoto = URL.createObjectURL(file);
    },

    async downloadAndSavePdf() {
      const pdfBlob = await this.generatePdfBlob();
      const pdfUrl = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'curriculum.pdf';
      link.click();
      URL.revokeObjectURL(pdfUrl);
    },

    areFieldsValid() {
      return (
        this.fullName &&
        this.email &&
        this.academicProgress &&
        this.cum &&
        this.professionalGoal &&
        this.technicalSkills &&
        this.softSkills
      );
    },

    generatePdfBlob() {
      const element = this.$refs.cvContent;
      return new Promise((resolve, reject) => {
        html2pdf()
          .from(element)
          .outputPdf()
          .then(pdfBlob => {
            resolve(pdfBlob);
          })
          .catch(error => reject(error));
      });
    }
  }
};
</script>

<style scoped>
.cv-container {
  background-color: #F7F7F7; /* Gris claro para el fondo del contenedor */
  padding: 30px;
  border-radius: 12px;
  max-width: 800px;
  margin: 40px auto;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  color: #333333; /* Gris oscuro para el texto */
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  color: #005521; /* Verde esmeralda para el título */
  font-size: 2.5em;
  font-weight: 600;
  margin-bottom: 10px;
}

.profile-section {
  text-align: center;
  margin-bottom: 25px;
}

.file-input {
  margin-bottom: 15px;
}

.profile-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #50C878; /* Verde esmeralda */
  margin-top: 20px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.plain-input,
.plain-textarea {
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 18px 20px; /* Aumento el padding para mayor tamaño */
  border: none; /* Sin borde */
  border-radius: 12px; /* Bordes más redondeados */
  width: 100%;
  font-size: 16px;
  background-color: #FFFFFF; /* Blanco para el fondo de los inputs */
  color: #333333; /* Gris oscuro para el texto */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  transition: all 0.3s ease; /* Transición suave */
}

.plain-input:focus,
.plain-textarea:focus {
  outline: none;
  box-shadow: 0 0 8px #50C878; /* Verde esmeralda al enfocar */
}

.plain-textarea {
  resize: none;
  min-height: 150px; /* Aumento la altura de los textareas */
}

label {
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 8px;
  display: block;
  color: #1C1C1C; /* Negro carbón */
}

.section {
  border: 1px solid #50C878; /* Verde esmeralda */
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 30px;
  background-color: #FFFFFF;
  box-sizing: border-box;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.cta-button {
  background-color: #CC5500; /* Naranja quemado */
  color: #FFFFFF;
  padding: 14px 22px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  flex: 1;
  margin-right: 15px;
  font-size: 16px;
}

.cta-button:last-child {
  margin-right: 0;
}

.cta-button:hover {
  background-color: #FFD700; /* Amarillo dorado al pasar el mouse */
  transform: scale(1.05);
}

footer {
  background-color: #1C1C1C; /* Negro carbón */
  color: #FFFFFF;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
  border-radius: 8px;
}
</style>
