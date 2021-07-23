<template>
    <div>
        <SearchBar />
        <ul class="movieContainer">
            <li
                class="movieInstance"
                v-for="(movie, id) in moviesLoaded"
                :key="id"
            >
                Title: {{ movie.Title }}
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
        increment() {
            return store.commit("increment");
        },
    },
    computed: {
        ...mapState(["count"]),
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
    width: 90%;
    height: 500px;
    position: absolute;
    top: 20%;
    background: tomato;
}
</style>
