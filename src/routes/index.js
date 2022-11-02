import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Movies from '../views/Movies.vue';
import MovieDetails from '../views/MovieDetails.vue';
import ErrorNotFound from '../views/ErrorNotFound.vue';

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/about', component: About, name: 'about' },
    { path: '/movies', component: Movies, name: 'movies.index' },
    { path: '/movies/:id', component: MovieDetails, name: 'movies.show', props: true},
    { path: '/:pathMatch(.*)*', component: ErrorNotFound, name: 'error.notfound'},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;