<template>
    <div class="movieDetailComponent">
        <p class="movieDetailTitle">{{ movieDetail.Title }}</p>
    </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../store";

export default {
    name: "MovieDetail",
    mounted() {
        let id = this.$route.params.id;
        store.dispatch("fetchMovieId", id);
    },

    computed: {
        ...mapState(["movieDetail"]),
    },
};
</script>

<style scoped>
.movieDetailComponent {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: black;
}

.movieDetailTitle {
    position: absolute;
    top: 20%;
    left: 45%;
    color: white;
}
</style>
