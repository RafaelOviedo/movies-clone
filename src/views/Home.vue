<template>
    <div>
        <SearchBar />
        <button class="button" @click="fetchData">increment {{ count }}</button>
        <div class="movie">{{ moviesLoaded }}</div>
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
        fetchData() {
            return store.dispatch("fetchMovies");
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

.movie {
    position: absolute;
    top: 40%;
    left: 45%;
}
</style>
