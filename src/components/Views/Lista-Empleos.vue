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

    <!-- Tarjetas de trabajos -->
    <div class="job-container">
      <div class="job-card" v-for="job in filteredJobs" :key="job.id">
        <img :src="job.icono" alt="Logo de la empresa" class="job-icon"/>
        <h2>{{ job.titulo }}</h2>
        <p class="company">{{ job.nombre }}</p>
        <p class="location">Departamento: {{ job.departamento }}</p>
        <p class="salary">Salario: ${{ job.salario }}</p>
        <!-- Enlace dinámico al detalle del empleo -->
        <router-link :to="{ name: 'TrabajoDetalle', params: { id: job.id } }" class="view-job-button">
          Ver Empleo
        </router-link>
      </div>
    </div>
  </div>

  <!-- Footer Component -->
  <FooterComponent />
</template>


<script>
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '@/firebase';
import FooterComponent from '@/components/FooterComponent.vue';

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
    this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      const db = getFirestore(app);
      const jobsCollection = collection(db, "empleos");
      const jobSnapshot = await getDocs(jobsCollection);
      this.jobs = jobSnapshot.docs.map(doc => ({
        id: doc.id,
        titulo: doc.data().Título,
        nombre: doc.data().nombre,
        icono: doc.data().icono,
        departamento: doc.data().Departamento,
        salario: doc.data().Salario,
      }));
      this.filteredJobs = this.jobs;
    },
    filterJobs() {
      this.filteredJobs = this.jobs.filter(job => {
        const matchesLocation = this.selectedLocation ? job.location === this.selectedLocation : true;

        let matchesSalary = true;
        if (this.selectedSalary) {
          const salaryValue = job.salario;
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