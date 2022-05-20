/***Mis Componentes***/
import LastArticles from './components/LastArticles.vue'
import HelloWorld from './components/HelloWorld.vue'
import BlogComponent from './components/BlogComponent.vue'
import FormComponent from './components/FormComponent.vue'
import PaginaComponent from './components/PaginaComponent.vue'


/***Paquetes a importar***/
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

/***Creación de rutas***/
const routes = [
    { path: "/blog", component: BlogComponent },
    { path: "/home", component: LastArticles },
    { path: "/hello", component: HelloWorld },
    { path: "/pagina", component: PaginaComponent },
    { path: "/form", component: FormComponent },
];

/***Configuración del router***/
const router = createRouter({
    history: createWebHistory(),
    routes,
});

/***Instancia de createApp()***/
const app = createApp(App);

/***Instancia del router y montar la app***/
app.use(router);
app.mount("#app");
