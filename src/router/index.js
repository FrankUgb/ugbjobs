import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/login',  // Redirige al login en lugar de mostrar el home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../components/Views/loginEstudiante.vue"),
  },
  {
    path: '/trabajo',
    name: 'Trabajo',
    component: () => import("../components/Views/Lista-Empleos.vue"),
    meta: { requiresAuth: true },  // Añadimos la meta para comprobar si está autenticado
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import("../components/Views/registroEstudiante.vue"),
  },
  {
    path: '/empleo',
    name: 'Empleo',
    component: () => import("../components/Views/EmpleoPage.vue"),
    meta: { requiresAuth: true },  // Añadimos la meta para comprobar si está autenticado
  },
  {
    path: '/inicio',
    name: 'InicioUsuario',
    component: () => import("../components/Views/Inicio-User.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: '/MiCV',
    name: 'MiCurriculum',
    component: () => import("../components/Views/MiCV.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: '/contactos',
    name: 'ContactPage',
    component: () => import('../components/Views/Contactos.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/footer',
    name: 'FooterComponent',
    component: () => import('../components/FooterComponent.vue'),
  },
  {
    path: '/empleo/:id',
    name: 'TrabajoDetalle',
    component: () => import('../components/Views/TrabajoDetalle.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../components/Views/loginEstudiante.vue"),
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import("../components/Views/registroEstudiante.vue"), // Asegúrate de que esta ruta apunte a la página de registro
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guardia global para verificar si el usuario está autenticado
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('user');  // Cambia esto según tu método de autenticación
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');  // Si no está autenticado, redirige al login
  } else {
    next();  // Si está autenticado o no necesita autenticación, continua
  }
});

export default router;
