<template>
    <ul class="favouriteTitle">
        <li v-for="movie in moviesFavourites" :key="movie.id">
            <p>{{ movie.title }}</p>
            <!-- <router-link>More info</router-link> -->
            <button @click="removeMovieFavourite(movie.id)">&times;</button>
        </li>
    </ul>
</template>

<script>
import { mapState } from "vuex";
import store from "../store";

export default {
    name: "FavouriteMovies",
    computed: {
        ...mapState(["moviesFavourites"]),
    },

    methods: {
        removeMovieFavourite(movieId) {
            return store.dispatch("removeMovieFavourite", movieId);
        },
    },
};
</script>

<style>
.favouriteTitle {
    position: absolute;
    top: 30%;
    left: 45%;
}
</style>
