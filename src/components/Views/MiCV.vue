<template>
    <div class="cv-container">
      <!-- Foto de perfil editable -->
      <div class="profile-section">
        <label for="profilePhoto">Subir foto de perfil:</label>
        <input type="file" @change="handleFileChange">
        <img :src="profilePhoto" alt="Profile Picture" class="profile-photo" v-if="profilePhoto">
      </div>
      
      <!-- Nombre y correo editables -->
      <div class="basic-info-section">
        <label for="fullName">Nombre Completo:</label>
        <input v-model="fullName" id="fullName" type="text" placeholder="Nombre Completo">
        
        <label for="email">Correo de Contacto:</label>
        <input v-model="email" id="email" type="email" placeholder="Correo Electrónico">
      </div>
  
      <!-- Progreso académico y CUM editables -->
      <div class="academic-section">
        <label for="academicProgress">Progreso Académico:</label>
        <input v-model="academicProgress" id="academicProgress" type="text" placeholder="Cursando Ciclo x de X">
        
        <label for="cum">CUM:</label>
        <input v-model="cum" id="cum" type="text" placeholder="CUM">
      </div>
  
      <!-- Objetivo profesional editable -->
      <div class="professional-section">
        <label for="professionalGoal">Objetivo Profesional:</label>
        <textarea v-model="professionalGoal" id="professionalGoal" placeholder="Objetivo Profesional"></textarea>
      </div>
  
      <!-- Habilidades técnicas y blandas editables -->
      <div class="skills-section">
        <label for="technicalSkills">Habilidades Técnicas:</label>
        <input v-model="technicalSkills" id="technicalSkills" placeholder="Habilidad Técnica (Separar con comas)">
  
        <label for="softSkills">Habilidades Blandas:</label>
        <input v-model="softSkills" id="softSkills" placeholder="Habilidad Blanda (Separar con comas)">
      </div>
  
      <!-- Botón para guardar -->
      <button @click="handleSaveCv">Guardar Currículum</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profilePhoto: '',
        fullName: 'Nombre Completo',
        email: 'correo@example.com',
        academicProgress: 'Cursando Ciclo X de X',
        cum: '8.5',
        professionalGoal: 'Mi objetivo es...',
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
      }
    }
  };
  </script>
  
  <style scoped>
  .cv-container {
    background-color: #e3f2fd;
    padding: 20px;
    border-radius: 10px;
    max-width: 800px;
    margin: auto;
    color: #01579b;
  }
  
  .profile-photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 10px;
  }
  
  input, textarea {
    display: block;
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
  }
  
  button {
    background-color: #01579b;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0277bd;
  }
  </style>
  