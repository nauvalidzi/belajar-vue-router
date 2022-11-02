<script setup>
import MovieDetails from '../views/MovieDetails.vue';

defineProps({
    movie: Object
})
</script>

<template>
    <div class="max-w-sm bg-white rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-center pt-3">
            <RouterLink :to="{name: 'movies.show', params: {id: movie.id}}">
                <img :src="movie.poster" :alt="movie.title" class="rounded-t-lg">
            </RouterLink>
        </div>
        <div class="p-5">
            <RouterLink :to="{name: 'movies.show', params: {id: movie.id}}">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ movie.title }}</h5>
            </RouterLink>
            <span class="mr-4">{{ movie.year }}</span>
            <span>{{ movie.runtime }}</span>
        </div>
    </div>
</template>