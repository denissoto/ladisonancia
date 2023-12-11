import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: () => import("@/views/Inicio.vue"),
    },
    {
        path: '/politica',
        name: 'Politica',
        component: () => import("@/views/Politica.vue"),
    },
    {
        path: '/iniciarsesion',
        name: 'IniciarSesion',
        component: () => import("@/views/IniciarSesion.vue"),
    },
    {
        path: '/economia',
        name: 'Economia',
        component: () => import("@/views/Economia.vue"),
    },
    {
        path: '/sociedad',
        name: 'Sociedad',
        component: () => import("@/views/Sociedad.vue"),
    },
    {
        path: '/deportes',
        name: 'Deportes',
        component: () => import("@/views/Deportes.vue"),
    },
    {
        path: '/tendencias',
        name: 'Tendencias',
        component: () => import("@/views/Tendencias.vue"),
    }
]

const router = new VueRouter({
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
})

export default router
