<template>
  <div class="job-list">
    <h1>Lista de Empleos</h1>
    <div class="job-container">
      <div class="job-card" v-for="job in jobs" :key="job.id">
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
      jobs: [
        { id: 1, title: 'Vigilante de Seguridad', company: 'CECOT', location: 'Barcelona', description: 'Responsable de la seguridad de las instalaciones.' },
        { id: 2, title: 'Desarrollador Frontend', company: 'Tech Solutions', location: 'Madrid', description: 'Desarrollo de interfaces web.' },
        { id: 3, title: 'Analista de Datos', company: 'Data Corp', location: 'Valencia', description: 'Análisis de datos para la toma de decisiones.' },
        { id: 4, title: 'Asistente Administrativo', company: 'Office Inc.', location: 'Sevilla', description: 'Apoyo en tareas administrativas y de oficina.' },
        { id: 5, title: 'Ingeniero de Software', company: 'Innovatech', location: 'Bilbao', description: 'Desarrollo de soluciones de software.' },
        { id: 6, title: 'Community Manager', company: 'Marketing Pro', location: 'Zaragoza', description: 'Gestión de redes sociales y campañas.' },
        { id: 7, title: 'Especialista en SEO', company: 'SEO Master', location: 'Granada', description: 'Optimización de motores de búsqueda.' },
        { id: 8, title: 'Contador', company: 'Finanzas 360', location: 'Alicante', description: 'Gestión de cuentas y finanzas.' },
        { id: 9, title: 'Diseñador Gráfico', company: 'Creativos', location: 'Murcia', description: 'Creación de contenido visual.' },
        { id: 10, title: 'Project Manager', company: 'Proyectos S.A.', location: 'Tarragona', description: 'Gestión y supervisión de proyectos.' },
        { id: 11, title: 'Ventas', company: 'Comercial XYZ', location: 'Almería', description: 'Venta y promoción de productos.' },
        { id: 12, title: 'Técnico de Soporte', company: 'Soporte 24/7', location: 'Salamanca', description: 'Atención al cliente y soporte técnico.' },
      ],
    };
  },
}
</script>

<style src="../../assets/Css/Empleos.css"></style>
