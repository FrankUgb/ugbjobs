<template>
    <div class="login-contenedor">
        <div class="barra_azul">INICIO DE SESIÓN</div>
        <img src="../../../public/media/loginRegistroEstu/logoJobsUGB.png" alt="Logo UGB" class="logo">
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            carnet: '',
            password: '',
            showPassword: false,
            credencialesCorrectas: {
                "123456": "password123" // Ejemplo: carnet = "123456", password = "password123"
            }
        };
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        validarLogin() {
            if (this.credencialesCorrectas[this.carnet] === this.password) {
                // Redirigir a la página principal después de un inicio de sesión exitoso
                window.location.href = "../home.html";
            } else {
                alert("Carnet o contraseña incorrectos.");
            }
        }
    }
};
</script>

<style scoped>
@import url('../../../public/css/loginEstudiante.css');
</style>
