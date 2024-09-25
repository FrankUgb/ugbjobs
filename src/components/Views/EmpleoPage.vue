<template>
  <div class="empleo-page">
    <h1>Detalles del Empleo</h1>
    <div class="job-details">
      <h2>Puesto: Desarrollador Web</h2>
      <p><strong>Empresa:</strong> Ejemplo S.A.</p>
      <p><strong>Ubicación:</strong> Ciudad Ejemplo</p>
      <p><strong>Salario:</strong> $1,200/mes</p>
      <p><strong>Descripción:</strong> Buscamos un desarrollador web con experiencia en Vue.js y Node.js.</p>
      <button class="apply-button">Aplicar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmpleoPage', // Asegúrate de que el nombre del componente sea en minúsculas
};
</script>

<style scoped>
.empleo-page {
  padding: 20px;
}

.job-details {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.apply-button {
  background-color: #50C878; /* Verde esmeralda */
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.apply-button:hover {
  background-color: #3d9f5c; /* Un tono más oscuro */
}
</style>
