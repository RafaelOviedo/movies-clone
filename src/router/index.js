import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import FavouriteMovies from "../views/FavouriteMovies.vue";

const routes = [
    {
        path: "/",
        name: "LandingPage",
        component: LandingPage,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/favourites",
        name: "FavouriteMovies",
        component: FavouriteMovies,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
