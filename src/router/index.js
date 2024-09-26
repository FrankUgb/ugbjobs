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
    path: '/inicio',
    name: 'InicioUsuario',
    component: () => import("../components/Views/Inicio-User.vue")
  },
  {
    path: '/MiCV',
    name: 'MiCV',
    component: () => import("../components/Views/MiCV.vue")
  },
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
