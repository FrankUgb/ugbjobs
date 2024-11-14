import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // Importa la configuración del router

createApp(App)
  .use(router)  // Usa el router en la aplicación
  .mount('#app')
