export default {
    data() {
      return {
        profilePhoto: '',  // Foto de perfil (editable al subir archivo)
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
      saveCv() {
        // Simula el guardado del currículum (puedes implementar almacenamiento local o enviar a backend)
        alert('Currículum guardado');
      },
      onFileChange(e) {
        const file = e.target.files[0];
        this.profilePhoto = URL.createObjectURL(file);
      }
    }
  };
  