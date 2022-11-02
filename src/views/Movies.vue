<script setup>
import {ref, onMounted} from 'vue'
import MovieCard from '../components/MovieCard.vue'

const movielist = ref([])
const isLoading = ref(true)

onMounted(async() => {
    const result = await fetch('http://localhost:3000/movies');
    console.log(result)
    const response = await result.json();

    movielist.value = response;
    isLoading.value = false;
})
</script>

<template>
    <div class="max-w-sm mx-auto" v-if="isLoading">
        <span class="text-2xl font-bold text-indigo-700">Please wait ...</span>
    </div>
    <div class="grid grid-cols-3 gap-4" v-else>
        <MovieCard v-for="movie in movielist" :key="movie.imdbID" :movie="movie" />
    </div>
</template>