<template>
  <div class="login-contenedor">
    <div class="barra_azul">INICIO DE SESIÓN</div>
    <img src="../../assets/Img/logoJobsUGB.png" alt="Logo UGB" class="logo">
    <form @submit.prevent="validarLogin">
      <label for="carnet">Carnet Estudiantil:</label>
      <input type="text" id="carnet" v-model="carnet" required>
      
      <label for="password">Contraseña:</label>
      <div class="container">
        <input :type="showPassword ? 'text' : 'password'" id="password" class="pass" v-model="password" required>
        <i class='bx' :class="showPassword ? 'bx-hide' : 'bx-show-alt'" @click="togglePasswordVisibility"></i>
      </div>
      
      <button type="submit">Iniciar Sesión</button>
    </form>
    
    <div class="registro-enlace">
      <p>No tienes cuenta? <router-link to="/registro">Regístrate aquí</router-link></p>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase";  // Importa la configuración de Firebase
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      carnet: '',
      password: '',
      showPassword: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async validarLogin() {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, `${this.carnet}@ugbedu.com`, this.password);
    console.log('Usuario logueado:', userCredential.user);
    
    // Guarda el estado de autenticación en localStorage
    localStorage.setItem('user', JSON.stringify(userCredential.user));

    this.$router.push("/inicio"); // Redirige al home si el login es exitoso
  } catch (error) {
    console.error("Error de autenticación:", error.message);
    alert("Carnet o contraseña incorrectos.");
  }
}
  }
};
</script>

<style scoped>
@import url('../../../public/css/loginEstudiante.css');
</style>
