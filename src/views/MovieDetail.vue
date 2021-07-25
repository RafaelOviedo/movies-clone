<template>
    <div class="movieDetailTitle">
        <p>{{ movieDetail.Title }}</p>
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
.movieDetailTitle {
    position: absolute;
    top: 30%;
}
</style>
