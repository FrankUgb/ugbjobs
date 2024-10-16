<template>
  <div class="formulario-contenedor">
    <div class="barra_azul">REGISTRO ESTUDIANTE</div>
    <img src="@/assets/Img/logoJobsUGB.png" alt="Logo UGB" style="display: block; margin: 0 auto;">
    <form @submit.prevent="registrarEstudiante">
      <label for="nombre_completo">Nombre Completo:</label>
      <input type="text" id="nombre_completo" v-model="nombreCompleto" required>

      <label for="carnet">Carnet Estudiantil:</label>
      <input type="text" id="carnet" v-model="carnet" required>

      <label for="contrasena">Contraseña:</label>
      <input type="password" id="contrasena" v-model="contrasena" required>

      <label for="confirmar_contrasena">Confirmar Contraseña:</label>
      <input type="password" id="confirmar_contrasena" v-model="confirmarContrasena" required>

      <label for="fecha_nacimiento">Fecha de Nacimiento:</label>
      <input type="date" id="fecha_nacimiento" v-model="fechaNacimiento" required>

      <label for="facultad">Facultad:</label>
      <select id="facultad" v-model="facultad" @change="actualizarCarreras" required>
        <option value="">Selecciona tu facultad</option>
        <option value="Ciencias de la salud">Ciencias de la salud</option>
        <option value="Derecho y relaciones internacionales">Derecho y relaciones internacionales</option>
        <option value="Ciencias empresariales">Ciencias empresariales</option>
        <option value="Ciencia y tecnologia">Ciencia y tecnologia</option>
        <option value="Ciencias y humanidades">Ciencias y humanidades</option>
        <option value="Ingenieria y arquitectura">Ingenieria y arquitectura</option>
      </select>

      <label for="carrera">Carrera:</label>
      <select id="carrera" v-model="carrera" required>
        <option value="">Selecciona una carrera</option>
        <option v-for="opcion in opcionesCarreras" :key="opcion" :value="opcion">{{ opcion }}</option>
      </select>

      <button type="submit">Registrar</button>

      <li><router-link to="/">Inicio</router-link></li>
    </form>
  </div>
</template>

<script>
import { auth } from "@/firebase";  // Importa la configuración de Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default {
  data() {
    return {
      nombreCompleto: '',
      carnet: '',
      contrasena: '',
      confirmarContrasena: '',
      fechaNacimiento: '',
      facultad: '',
      carrera: '',
      opcionesCarreras: [],
      carrerasPorFacultad: {
        "Ciencias de la salud": ["Tecnico en enfermeria (semipresencial)", "Licenciatura en enfermeria (semipresencial)", "Doctorado en medicina (presencial)"],
        "Derecho y relaciones internacionales": ["Licenciatura en ciencias juridicas (virtual)", "Licenciatura en relaciones y negocios internacionales (virtual)", "Licenciatura en ciencias juridicas (semipresencial)", "Licenciatura en relaciones y negocios internacionales (semipresencial)"],
        "Ciencias empresariales": ["Licenciatura en marketing y negocios digitales (virtual)", "Licenciatura en administracion de empresas (virtual)", "Tecnico en mercadeo y ventas (virtual)", "Licenciatura en marketing y negocios digitales (semipresencial)", "Licenciatura en administracion de empresas y desarrollo turistico (semipresencial)", "Tecnico en contaduria publica (semipresencial)", "Tecnico en mercadeo y ventas (semipresencial)", "Licenciatura en administracion de empresas (semipresencial)", "Licenciatura en contaduria publica (semipresencial)"],
        "Ciencia y tecnologia": ["Ingenieria en inteligencia de negocios (virtual)", "Ingenieria en desarrollo de software (virtual)", "Ingenieria en sistemas y redes informaticas (virtual)", "Tecnico en ingenieria en sistemas y redes informaticas (virtual)", "Ingenieria en inteligencia de negocios (semipresencial)", "Ingenieria en sistemas y redes informaticas (semipresencial)", "Tecnico en ingenieria en sistemas y redes informaticas (semipresencial)"],
        "Ciencias y humanidades": ["Tecnico en idioma ingles (Virtual)", "Licenciatura en comunicaciones (semipresencial)", "Licenciatura en idioma ingles (presencial)", "Profesorado en matematica, para tercer ciclo de educacion basica y media (presencial)", "Profesorado en lenguaje y literatura para tercer ciclo de educacion basica y media (presencial)", "Profesorado en idioma ingles para tercer ciclo de educacion basica y media (presencial)"],
        "Ingenieria y arquitectura": ["Tecnico en ingenieria industrial (virtual)", "Ingenieria industrial (virtual)", "Arquitectura (semipresencial)", "Tecnico en ingenieria civil y construccion (semipresencial)", "Ingenieria civil (semipresencial)", "Ingenieria industrial (semipresencial)", "Ingenieria agroindustrial (semipresencial)"]
      },
    };
  },
  methods: {
    actualizarCarreras() {
      this.opcionesCarreras = this.carrerasPorFacultad[this.facultad] || [];
    },
    async registrarEstudiante() {
      if (this.contrasena !== this.confirmarContrasena) {
        alert("Las contraseñas no coinciden.");
        return;
      }

      try {
        const email = `${this.carnet}@ugbedu.com`;  // Usamos el carnet como parte del email
        const userCredential = await createUserWithEmailAndPassword(auth, email, this.contrasena);
        const user = userCredential.user;

        // Guardar información adicional del estudiante en Firestore
        await setDoc(doc(db, "estudiantes", user.uid), {
          nombreCompleto: this.nombreCompleto,
          carnet: this.carnet,
          fechaNacimiento: this.fechaNacimiento,
          facultad: this.facultad,
          carrera: this.carrera,
          email: email,
        });

        console.log("Estudiante registrado con éxito:", user);
        window.location.href = "../loginEstudiante.html";  // Redirigir al login
      } catch (error) {
        console.error("Error en el registro:", error.message);
        alert("Hubo un error al registrar el estudiante.");
      }
    }
  }
};
</script>

<style scoped>
@import url('../../../public/css/registroEstudiante.css');
</style>
