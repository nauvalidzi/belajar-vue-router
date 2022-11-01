import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Movies from '../views/Movies.vue';
import MovieDetails from '../views/MovieDetails.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/movies', component: Movies },
    { path: '/movies/:id', component: MovieDetails}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;