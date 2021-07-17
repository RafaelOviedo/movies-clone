import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LandingPage from "../views/LandingPage.vue";

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/",
        name: "LandingPage",
        component: LandingPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
