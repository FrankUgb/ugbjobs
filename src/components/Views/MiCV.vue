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
          this.$router.push('/');
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
      try {
        const pdfBlob = await this.generatePdfBlob();
        
        // Verifica si pdfBlob es un Blob
        if (pdfBlob instanceof Blob) {
          const pdfUrl = URL.createObjectURL(pdfBlob);
          const link = document.createElement('a');
          link.href = pdfUrl;
          link.download = 'curriculum.pdf';
          link.click();
          
          // Libera el objeto URL después de usarlo
          URL.revokeObjectURL(pdfUrl);
        } else {
          throw new Error('El archivo PDF generado no es un Blob válido');
        }
      } catch (error) {
        console.error('Error al descargar el PDF:', error.message);
        alert(`Error: ${error.message}`);
      }
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
    if (!element) {
      reject(new Error('El contenido del CV no está disponible.'));
      return;
    }

    html2pdf()
      .from(element)
      .toPdf()
      .get('blob')
      .then(pdfBlob => {
        // Verifica si pdfBlob es un Blob válido
        if (pdfBlob instanceof Blob) {
          resolve(pdfBlob);
        } else {
          reject(new Error('El archivo generado no es un Blob válido.'));
        }
      })
      .catch(error => {
        reject(new Error(`Error al generar el PDF: ${error.message}`));
      });
  });
}

  }
};
</script>

<style src="../../assets/Css/MiCV.css"></style>
