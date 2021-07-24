<template>
    <div>
        <SearchBar />
        <ul class="movieContainer">
            <li
                class="movieInstance"
                v-for="(movie, id) in moviesLoaded"
                :key="id"
            >
                <p>Title: {{ movie.Title }}</p>
                <p>Title: {{ movie.Year }}</p>

                <button
                    class="removeButton"
                    @click="
                        addMovieToFavourites({
                            title: movie.Title,
                            id: movie.imdbID,
                        })
                    "
                >
                    &times;
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
.button {
    position: absolute;
    top: 20%;
}

.movieContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 97.4%;
    height: 500px;
    position: absolute;
    top: 20%;
    left: 0%;
}

.movieInstance {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    width: 25%;
    height: 20%;
    position: relative;
    top: 50vh;
    left: 5%;
    border: 2px solid black;
    margin-bottom: 1%;
}

.removeButton {
    width: 15%;
    transform: translate(565%, -450%);
}
</style>
