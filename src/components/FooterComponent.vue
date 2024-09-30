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
  padding: 20px 0; /* Menos espaciado para que sea más angosto */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-container {
  display: flex;
  align-items: center; /* Alinear verticalmente */
  justify-content: space-between;
  width: 100%;
  max-width: 1200px; /* Ajusta el ancho máximo si es necesario */
  flex-wrap: wrap;
}

.footer-column {
  flex: 1;
  min-width: 150px; /* Ajustar mínimo para ser más compacto */
  margin: 10px; /* Menos margen para un diseño más compacto */
}

.footer-image {
  height: 80px; /* Ajustada a 80px para ser más grande */
  margin-right: 20px; /* Espacio a la derecha del logo */
}

h5 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

p,
ul,
li {
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

.footer-link {
  color: #FFD700; /* Amarillo dorado */
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline; /* Subrayado al pasar el mouse */
}

.footer-bottom {
  border-top: 1px solid #D3D3D3; /* Gris claro */
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  color: #D3D3D3; /* Gris claro */
  width: 100%;
}
</style>
