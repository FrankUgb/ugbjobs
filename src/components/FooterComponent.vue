<template>
  <!-- Footer -->
  <footer class="footer-area">
    <div class="footer-container">
      <!-- Imagen en el Footer -->
      <img src="../assets/Img/logo3.png" alt="Descripción de la imagen" class="footer-image" />

      <!-- About Us Section -->
      <div class="footer-column">
        <h5>Sobre Nosotros</h5>
        <p>
          Somos un portal de empleos que innova constantemente para responder a las
          necesidades actuales y futuras de la sociedad.
        </p>
      </div>

      <!-- Contact Us Section -->
      <div class="footer-column">
        <h5>Contáctenos</h5>
        <ul>
          <li>Teléfono: (503) 2645 6500</li>
          <li>Número Fijo: 800-7026</li>
          <li>WhatsApp: (503) 2645 6500</li>
          <li>Email: <a href="mailto:consultas@ugb.edu.sv" class="footer-link">consultas@ugb.edu.sv</a></li>
        </ul>
      </div>

      <!-- Visit Also Section -->
      <div class="footer-column">
        <h5>Visita También</h5>
        <ul>
          <li><a href="https://ugb.edu.sv/" class="footer-link">UGB sitio oficial</a></li>
          <li><a href="https://estudiantes.ugb.edu.sv/Login?ReturnUrl=%2F" class="footer-link">Portal Estudiantes</a></li>
          <li><a href="https://ugb.instructure.com/login/canvas" class="footer-link">Canvas UGB</a></li>
        </ul>
      </div>
    </div>

    <!-- Footer Bottom Line -->
    <div class="footer-bottom">
      <p>&copy; 2024 Empleo Portal. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
.footer-area {
  background-color: #1C1C1C; /* Negro carbón */
  color: #D3D3D3; /* Gris claro */
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
  padding: 0 15px;
}

.footer-column {
  flex: 1;
  min-width: 150px;
  margin: 10px;
}

.footer-image {
  height: 80px;
  margin-right: 20px;
}

h5 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #FFD700; /* Amarillo dorado para los encabezados */
}

p,
ul,
li {
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

.footer-link {
  color: #50C878; /* Verde esmeralda */
  text-decoration: none;
}

.footer-link:hover {
  color: #CC5500; /* Naranja quemado al pasar el mouse */
  text-decoration: underline;
}

.footer-bottom {
  border-top: 1px solid #333333; /* Gris oscuro */
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  color: #D3D3D3; /* Gris claro */
  width: 100%;
}
</style>
