<template>
    <div class="homeComponent">
        <SearchBar />

        <ul class="movieContainer">
            <li
                class="movieInstance"
                v-for="movie in moviesLoaded"
                :key="movie.imdbID"
            >
                <p class="movieTitle">Title: {{ movie.Title }}</p>
                <router-link
                    class="seeMore"
                    :to="{ name: 'MovieDetail', params: { id: movie.imdbID } }"
                    >See more</router-link
                >

                <button
                    class="favouriteButton"
                    @click="
                        addMovieToFavourites({
                            title: movie.Title,
                            id: movie.imdbID,
                        })
                    "
                >
                    Add to favourite
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import store from "../store/index";
import { mapState } from "vuex";

export default {
    name: "Home",
    store,
    components: { SearchBar },

    methods: {
        addMovieToFavourites(payload) {
            return store.dispatch("addMovieToFavourites", payload);
        },
    },
    computed: {
        ...mapState(["moviesLoaded"]),
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homeComponent {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: black;
}

.button {
    position: absolute;
    top: 20%;
}

.movieContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 95%;
    height: 500px;
    position: absolute;
    top: 27%;
    left: 1%;
    overflow: scroll;
    border: 1px solid silver;
}
.movieContainer::-webkit-scrollbar {
    display: none;
}

.movieInstance {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    width: 95%;
    height: 20%;
    position: relative;
    top: 55vh;
    left: 1%;
    border: 2px solid silver;
    margin-bottom: 2%;
}

.movieTitle {
    color: white;
}

.seeMore {
    text-decoration: none;
    color: crimson;
}

.favouriteButton {
    width: 15%;
    transform: translate(400%, -180%);
}
</style>
