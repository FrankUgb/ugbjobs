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
    component: () => import("../components/Views/Trabajo.vue")
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import("../components/Views/Registro.vue")
  },
  {
    path: '/empleo',
    name: 'Empleo',
    component: () => import("../components/Views/EmpleoPage.vue")
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
