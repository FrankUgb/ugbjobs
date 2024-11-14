import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/login', // Redirige a la página de login
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("../components/Views/loginEstudiante.vue"),
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import("../components/Views/registroEstudiante.vue"),
  },
  {
    path: '/trabajo',
    name: 'Trabajo',
    component: () => import("../components/Views/Lista-Empleos.vue"),
    meta: { requiresAuth: false },  // Añadido meta de autenticación
  },
  {
    path: '/empleo/:id',  // Asegúrate de que el parámetro :id esté en la ruta
    name: 'TrabajoDetalle',
    component: () => import('../components/Views/TrabajoDetalle.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/MiCV',
    name: 'MiCurriculum',
    component: () => import("../components/Views/MiCV.vue"),
    meta: { requiresAuth: false }, // Añadido meta de autenticación
  },
  {
    path: '/contactos',
    name: 'ContactPage',
    component: () => import('../components/Views/Contactos.vue'),
    meta: { requiresAuth: false },  // Añadido meta de autenticación
  },
  {
    path: '/empleo',
    name: 'Empleo',
    component: () => import("../components/Views/EmpleoPage.vue"),
    meta: { requiresAuth: true },  // Añadido meta de autenticación
  },
  {
    path: '/footer',
    name: 'FooterComponent',
    component: () => import('../components/FooterComponent.vue'),
  },
  // Ruta de redirección en caso de que se intente acceder a rutas que no existen
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guardia global para verificar si el usuario está autenticado
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('user'); // Verifica si hay un usuario en localStorage
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');  
  } else {
    if (to.name === 'Login' && isAuthenticated) {
      next('/inicio'); // Si ya está autenticado y quiere ir al login, redirige a inicio
    } else {
      next();  
    }
  }
});

export default router;
