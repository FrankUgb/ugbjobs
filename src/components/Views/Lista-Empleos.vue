<template>
  <div class="job-list">
    <h1>Lista de Empleos</h1>
    
    <!-- Filtros -->
    <div class="filters">
      <select v-model="selectedLocation" @change="filterJobs">
        <option value="">Seleccionar Ubicación</option>
        <option value="San Salvador">San Salvador</option>
        <option value="Santa Ana">Santa Ana</option>
        <option value="San Miguel">San Miguel</option>
        <option value="La Libertad">La Libertad</option>
        <option value="Sonsonate">Sonsonate</option>
      </select>

      <select v-model="selectedSalary" @change="filterJobs">
        <option value="">Seleccionar Salario</option>
        <option value="300">Menos de $300</option>
        <option value="350-500">$350 - $500</option>
        <option value="550-600">$550 - $600</option>
        <option value="600">Más de $600</option>
      </select>

      <select v-model="selectedSpecialty" @change="filterJobs">
        <option value="">Seleccionar Especialidad</option>
        <option value="Medicina">Medicina</option>
        <option value="Ing. Sistemas">Ing. Sistemas</option>
        <option value="Industrial">Industrial</option>
        <option value="Bases de Datos">Bases de Datos</option>
        <option value="Abogado">Abogado</option>
        <option value="Marketing">Marketing</option>
        <option value="Recursos Humanos">Recursos Humanos</option>
        <option value="Arquitectura">Arquitectura</option>
        <option value="Contabilidad">Contabilidad</option>
        <option value="Logística">Logística</option>
      </select>

      <select v-model="selectedHours" @change="filterJobs">
        <option value="">Seleccionar Horas</option>
        <option value="Tiempo Completo">Tiempo Completo</option>
        <option value="Medio Tiempo">Medio Tiempo</option>
        <option value="Por Proyecto">Por Proyecto</option>
      </select>
    </div>

    <div class="job-container">
      <div class="job-card" v-for="job in filteredJobs" :key="job.id">
        <h2>{{ job.title }}</h2>
        <p class="company">{{ job.company }}</p>
        <p class="location">{{ job.location }}</p>
        <p class="salary">Salario: ${{ job.salary }}</p>
        <button class="apply-button">Aplicar</button>
      </div>
    </div>
  </div>

  <!-- Agrega el componente del footer aquí -->
  <FooterComponent />
</template>

<script>
import { getFirestore, collection, getDocs } from "firebase/firestore"; // Importar Firestore
import { app } from '@/firebase'; // Asegúrate de que esta ruta sea correcta
import FooterComponent from '@/components/FooterComponent.vue'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'TrabajoDetalle',
  components: {
    FooterComponent,
  },
  data() {
    return {
      selectedLocation: '',
      selectedSalary: '',
      selectedSpecialty: '',
      selectedHours: '',
      jobs: [],
      filteredJobs: [],
    };
  },
  created() {
    this.fetchJobs(); // Llama a la función para obtener empleos desde Firestore
  },
  methods: {
    async fetchJobs() {
      const db = getFirestore(app);
      const jobsCollection = collection(db, "Empleo");
      const jobSnapshot = await getDocs(jobsCollection);
      this.jobs = jobSnapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().Titulo,
        company: doc.data().Compañía,
        location: doc.data().Ubicacion,
        salary: doc.data().Salario,
        specialty: doc.data().Especialidad,
        hours: doc.data().Horas,
      }));
      this.filteredJobs = this.jobs;
    },
    filterJobs() {
      this.filteredJobs = this.jobs.filter(job => {
        const matchesLocation = this.selectedLocation ? job.location === this.selectedLocation : true;
        
        // Nueva lógica de filtro para el salario
        let matchesSalary = true;
        if (this.selectedSalary) {
          const salaryValue = job.salary; // Obtiene el salario del trabajo
          if (this.selectedSalary === "300") {
            matchesSalary = salaryValue < 300;
          } else if (this.selectedSalary === "350-500") {
            matchesSalary = salaryValue >= 350 && salaryValue <= 500;
          } else if (this.selectedSalary === "550-600") {
            matchesSalary = salaryValue >= 550 && salaryValue <= 600;
          } else if (this.selectedSalary === "600") {
            matchesSalary = salaryValue > 600;
          }
        }

        const matchesSpecialty = this.selectedSpecialty ? job.specialty === this.selectedSpecialty : true;
        const matchesHours = this.selectedHours ? job.hours === this.selectedHours : true;

        return matchesLocation && matchesSalary && matchesSpecialty && matchesHours;
      });
    },
  },
}
</script>

<style src="../../assets/Css/Empleos.css"></style>
