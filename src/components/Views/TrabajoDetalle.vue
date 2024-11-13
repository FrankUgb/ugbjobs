<template>
    <div class="job-detail">
      <div class="header">
        <img :src="job.icono" alt="Banner de la empresa" class="job-banner" />
      </div>
  
      <!-- Título del trabajo debajo del banner -->
      <h1 class="job-title">{{ job.titulo }}</h1>
      
      <div class="job-info">
        <div class="info-card" v-for="(value, key) in displayData" :key="key">
          <strong>{{ key }}:</strong>
          <p>{{ value }}</p>
        </div>
      </div>
    </div>

    <!-- Footer Component -->
    <FooterComponent />
  </template>
  
  <script>
  import { getFirestore, doc, getDoc } from "firebase/firestore";
  import { app } from '@/firebase';
  import FooterComponent from '@/components/FooterComponent.vue'; // Asegúrate de tener la ruta correcta
  
  export default {
    name: 'TrabajoDetalle',
    components: {
      FooterComponent
    },
    data() {
      return {
        job: {}
      };
    },
    computed: {
      displayData() {
        return {
          "Departamento": this.job.departamento,
          "Descripción": this.job.descripcion,
          "Distrito": this.job.distrito,
          "Facultad": this.job.facultad,
          "Modalidad": this.job.modalidad,
          "Periodo de Tiempo": this.job.periodoTiempo,
          "Salario": this.job.salario ? `$${this.job.salario}` : "No especificado",
          "Tiempo": `${this.job.tiempo} semanas`,
          "Tipo": this.job.tipo,
          "Correo": this.job.correo,
          "Fecha de Publicación": this.job.fechaPublicacion,
          "Sector": this.job.sector,
          "Teléfono": this.job.telefono,
        };
      }
    },
    created() {
      this.fetchJobDetails();
    },
    methods: {
      async fetchJobDetails() {
        const db = getFirestore(app);
        const jobId = this.$route.params.id;
        const jobRef = doc(db, "empleos", jobId);
        const jobDoc = await getDoc(jobRef);
  
        if (jobDoc.exists()) {
          const data = jobDoc.data();
          this.job = {
            titulo: data.Título,
            departamento: data.Departamento,
            descripcion: data.Descripción,
            distrito: data.Distrito,
            facultad: data.Facultad,
            modalidad: data.Modalidad,
            periodoTiempo: data.PeriodoTiempo,
            salario: data.Salario,
            tiempo: data.Tiempo,
            tipo: data.Tipo,
            correo: data.correo,
            fechaPublicacion: new Date(data.fechaPublicacion.toDate()).toLocaleString(),
            icono: data.icono,
            nombre: data.nombre,
            sector: data.sector,
            telefono: data.telefono,
          };
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .job-detail {
    max-width: 900px;
    margin: 40px auto;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
  
  .header {
    position: relative;
    text-align: center;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  .job-banner {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .job-title {
    text-align: center;
    font-size: 2em;
    color: #50C878; /* Verde esmeralda */
    margin-top: 20px;
  }
  
  .job-info {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
  }
  
  .info-card {
    flex: 1 1 300px;
    background-color: #f9f9f9;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  .info-card strong {
    display: block;
    font-size: 1em;
    color: #333333;
    margin-bottom: 8px;
  }
  
  .info-card p {
    font-size: 0.95em;
    color: #4F4F4F;
    margin: 0;
  }
  </style>
  