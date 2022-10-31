<script setup>
import {ref, onMounted} from 'vue'
import MovieCard from '../components/MovieCard.vue'

const movielist = ref([])

onMounted(() => {
    fetch('http://localhost:3000/movies')
    .then((response) => response.json())
    .then(apiMovies => {
        movielist.value = apiMovies
    })
})
</script>

<template>
    <h1>Movies</h1>
    <div class="grid grid-cols-3 gap-4">
        <MovieCard v-for="movie in movielist" :key="movie.imdbID" :movie="movie" />
    </div>
</template>