import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/HelloWorld.vue'), // Asegúrate de que este nombre sea correcto
  },
  {
    path: '/trabajo',
    name: 'Trabajo',
    component: () => import("../components/Views/Lista-Empleos.vue")
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import("../components/Views/registroEstudiante.vue")
  },
  {
    path: '/empleo',
    name: 'Empleo',
    component: () => import("../components/Views/EmpleoPage.vue")
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../components/Views/loginEstudiante.vue")
  },
  {
    path: '/inicio',
    name: 'InicioUsuario',
    component: () => import("../components/Views/Inicio-User.vue")
  },
  {
    path: '/MiCV',
    name: 'MiCurriculum',  // Cambiado para que coincida
    component: () => import("../components/Views/MiCV.vue")
  },
  {
    path: '/contactos',
    name: 'ContactPage',
    component: () => import('../components/Views/Contactos.vue') // Verifica que este nombre sea correcto
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
