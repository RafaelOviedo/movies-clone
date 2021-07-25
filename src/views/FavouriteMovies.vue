<template>
    <div class="favouriteComponent">
        <p class="favouriteTitle">Favourite Movies</p>
        <ul class="movieContainer">
            <li
                class="movieInstance"
                v-for="movie in moviesFavourites"
                :key="movie.id"
            >
                <p class="movieTitle">{{ movie.title }}</p>
                <!-- <router-link>More info</router-link> -->
                <button
                    class="removeButton"
                    @click="removeMovieFavourite(movie.id)"
                >
                    &times;
                </button>
            </li>
        </ul>
    </div>
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
.favouriteComponent {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: black;
    overflow: scroll;
}
.favouriteComponent::-webkit-scrollbar {
    display: none;
}

.favouriteTitle {
    position: absolute;
    top: 15%;
    left: 45%;
    font-size: x-large;
    color: white;
}

.movieInstance {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 25vh;
    left: 1%;
    width: 95%;
    height: 20%;
    border: 2px solid silver;
    margin-bottom: 2%;
}

.movieTitle {
    color: white;
}

.removeButton {
    width: 7%;
    transform: translate(665%);
}
</style>
