<template>
    <form class="formContainer" @submit.prevent="fetchData(movie)">
        <input
            v-model="movie"
            type="text"
            placeholder="type your movie here..."
        />
        <input type="submit" name="submit" />
    </form>
</template>

<script>
import store from "../store/index";
export default {
    name: "SearchBar",
    data() {
        return {
            movie: "",
        };
    },
    methods: {
        fetchData(movieTitle) {
            return store.dispatch(`fetchMovies`, movieTitle);
        },
    },
};
</script>

<style scoped>
.formContainer {
    position: absolute;
    top: 15%;
    left: 40%;
}
</style>
