<template>
  <div class="cv-container" ref="cvContent">
    <header class="header">
      <h1>Currículum Vitae</h1>
    </header>

    <div class="profile-section">
      <input type="file" ref="profileFileInput" @change="handleFileChange" class="file-input" />
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
      profilePhotoUrl: '', // Para almacenar la URL de la foto
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
          let profilePhotoUrl = this.profilePhotoUrl;

          // Si hay una nueva imagen, la subimos a Firebase Storage
          if (this.$refs.profileFileInput.files.length > 0) {
            const file = this.$refs.profileFileInput.files[0];
            const fileRef = storageRef(storage, `profilePhotos/${this.fullName}_${file.name}`);
            await uploadBytes(fileRef, file);
            profilePhotoUrl = await getDownloadURL(fileRef);
          }

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
            profilePhoto: profilePhotoUrl,
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

    handleFileChange() {
      const fileInput = this.$refs.profileFileInput;

      // Verifica si hay un archivo seleccionado
      if (fileInput && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        if (file && file.type.startsWith('image/')) {
          this.profilePhoto = URL.createObjectURL(file);
        } else {
          alert("Por favor, seleccione un archivo de imagen válido.");
        }
      } else {
        alert("No se seleccionó ningún archivo.");
      }
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
  background-color: #F7F7F7;
  padding: 30px;
  border-radius: 12px;
  max-width: 800px;
  margin: 40px auto;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  color: #333333;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  color: #005521;
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
  border: 4px solid #50C878;
  margin-top: 20px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.plain-input,
.plain-textarea {
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 18px 20px;
  border: none;
  border-radius: 12px;
  width: 100%;
  font-size: 16px;
  background-color: #FFFFFF;
  color: #333333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.plain-input:focus,
.plain-textarea:focus {
  outline: none;
  box-shadow: 0 0 8px #50C878;
}

.plain-textarea {
  resize: none;
  min-height: 150px;
}

label {
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 8px;
  display: block;
  color: #1C1C1C;
}

.section {
  border: 1px solid #50C878;
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 30px;
  background-color: #fff;
}

.buttons {
  text-align: center;
}

.cta-button {
  background-color: #50C878;
  color: white;
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 1.1em;
  margin: 15px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #388E3C;
}

.cta-button:disabled {
  background-color: #D0D0D0;
}
</style>
