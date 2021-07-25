<template>
    <form class="formContainer" @submit.prevent="fetchData(movie)">
        <p class="formTitle">Search your movie</p>
        <input
            class="searchInput"
            v-model="movie"
            type="text"
            placeholder="type your movie here..."
        />
        <input class="searchButton" type="submit" name="submit" />
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
    width: 40%;
    height: 20%;
    position: absolute;
    top: 15%;
    left: 30%;
}

.formTitle {
    color: white;
}

.searchInput {
    width: 40%;
    height: 18%;
    border-radius: 20px 0 0 20px;
    outline: none;
    border: 2px solid crimson;
}

.searchButton {
    width: 15%;
    height: 22%;
    border-radius: 0 20px 20px 0;
    background: crimson;
    color: white;
    border: none;
    font-weight: bold;
}
</style>
