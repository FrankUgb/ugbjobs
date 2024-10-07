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
        <option value="30000">Menos de $30,000</option>
        <option value="40000">Menos de $40,000</option>
        <option value="50000">Menos de $50,000</option>
        <option value="60000">Más de $60,000</option>
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
        <p class="description">{{ job.description }}</p>
        <button class="apply-button">Aplicar</button>
      </div>
    </div>
  </div>

  <!-- Agrega el componente del footer aquí -->
  <FooterComponent />
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'TrabajoDetalle',
  components: {
    FooterComponent, // Registra el componente
  },
  data() {
    return {
      selectedLocation: '',
      selectedSalary: '',
      selectedSpecialty: '',
      selectedHours: '',
      jobs: [
        { id: 1, title: 'Médico General', company: 'Hospital Nacional', location: 'San Salvador', description: 'Atención médica integral a pacientes.', salary: 30000, specialty: 'Medicina', hours: 'Tiempo Completo' },
        { id: 2, title: 'Desarrollador Backend', company: 'Innovatech', location: 'Santa Ana', description: 'Desarrollo de aplicaciones web.', salary: 40000, specialty: 'Ing. Sistemas', hours: 'Tiempo Completo' },
        { id: 3, title: 'Ingeniero Industrial', company: 'Proyectos Industriales', location: 'San Miguel', description: 'Optimización de procesos industriales.', salary: 35000, specialty: 'Industrial', hours: 'Tiempo Completo' },
        { id: 4, title: 'Abogado Corporativo', company: 'Legal & Co.', location: 'La Libertad', description: 'Asesoría legal a empresas.', salary: 50000, specialty: 'Abogado', hours: 'Medio Tiempo' },
        { id: 5, title: 'Analista de Bases de Datos', company: 'Data Solutions', location: 'San Salvador', description: 'Mantenimiento de bases de datos.', salary: 38000, specialty: 'Bases de Datos', hours: 'Tiempo Completo' },
        { id: 6, title: 'Community Manager', company: 'Marketing Pro', location: 'Sonsonate', description: 'Gestión de redes sociales.', salary: 32000, specialty: 'Marketing', hours: 'Medio Tiempo' },
        { id: 7, title: 'Especialista en Recursos Humanos', company: 'HR Solutions', location: 'San Salvador', description: 'Gestión del talento humano.', salary: 30000, specialty: 'Recursos Humanos', hours: 'Tiempo Completo' },
        { id: 8, title: 'Arquitecto de Software', company: 'Tech Architects', location: 'San Salvador', description: 'Diseño y desarrollo de software escalable.', salary: 55000, specialty: 'Ing. Sistemas', hours: 'Tiempo Completo' },
        { id: 9, title: 'Contador Público', company: 'Cuentas Claras', location: 'San Miguel', description: 'Gestión de cuentas y auditoría.', salary: 38000, specialty: 'Contabilidad', hours: 'Tiempo Completo' },
        { id: 10, title: 'Coordinador de Logística', company: 'Logística y Más', location: 'Santa Ana', description: 'Planificación y ejecución de la cadena de suministro.', salary: 42000, specialty: 'Logística', hours: 'Medio Tiempo' },
        { id: 11, title: 'Técnico en Redes', company: 'Redes Seguras', location: 'La Libertad', description: 'Mantenimiento y optimización de redes.', salary: 30000, specialty: 'Ing. Sistemas', hours: 'Por Proyecto' },
        { id: 12, title: 'Asistente de Ventas', company: 'Ventas Rápidas', location: 'Sonsonate', description: 'Soporte al equipo de ventas y atención al cliente.', salary: 25000, specialty: 'Marketing', hours: 'Tiempo Completo' },
      ],
      filteredJobs: [], // Lista de trabajos filtrados
    };
  },
  created() {
    this.filteredJobs = this.jobs; // Inicializa los trabajos filtrados
  },
  methods: {
    filterJobs() {
      this.filteredJobs = this.jobs.filter(job => {
        const matchesLocation = this.selectedLocation ? job.location === this.selectedLocation : true;
        const matchesSalary = this.selectedSalary ? job.salary < parseInt(this.selectedSalary) : true;
        const matchesSpecialty = this.selectedSpecialty ? job.specialty === this.selectedSpecialty : true;
        const matchesHours = this.selectedHours ? job.hours === this.selectedHours : true;

        return matchesLocation && matchesSalary && matchesSpecialty && matchesHours;
      });
    },
  },
}
</script>

<style src="../../assets/Css/Empleos.css"></style>
