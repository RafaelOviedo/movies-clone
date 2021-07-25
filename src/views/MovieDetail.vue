<template>
    <div class="movieDetailComponent">
        <p class="movieDetailHeader">Movie Detail</p>
        <div class="movieDetailContainer">
            <p class="movieDetailTitle">{{ movieDetail.Title }}</p>
            <p class="movieDetailRelease">{{ movieDetail.Released }}</p>
            <p class="movieDetailGenre">{{ movieDetail.Genre }}</p>
            <p class="movieDetailRating">{{ movieDetail.imdbRating }}</p>
            <p class="movieDetailRuntime">{{ movieDetail.Runtime }}</p>
            <p class="movieDetailLanguage">{{ movieDetail.Language }}</p>
            <p class="movieDetailCountry">{{ movieDetail.Country }}</p>
            <p class="movieDetailPlot">{{ movieDetail.Plot }}</p>
        </div>
        <div class="movieDetailPoster">
            <img src="`${movieDetail.Poster}`" alt="moviePoster" />
        </div>
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

.movieDetailHeader {
    position: absolute;
    top: 10%;
    left: 45%;
    font-size: x-large;
    color: white;
}

.movieDetailContainer {
    position: absolute;
    top: 22%;
    left: 7%;
    width: 85%;
    height: 70vh;
    border: 2px solid silver;
}

.movieDetailTitle {
    position: absolute;
    top: 10%;
    left: 10%;
    color: white;
}

.movieDetailRelease {
    position: absolute;
    top: 15%;
    left: 10%;
    color: white;
}

.movieDetailGenre {
    position: absolute;
    top: 20%;
    left: 10%;
    color: white;
}

.movieDetailRating {
    position: absolute;
    top: 25%;
    left: 10%;
    color: white;
}

.movieDetailRuntime {
    position: absolute;
    top: 30%;
    left: 10%;
    color: white;
}

.movieDetailLanguage {
    position: absolute;
    top: 35%;
    left: 10%;
    color: white;
}

.movieDetailCountry {
    position: absolute;
    top: 40%;
    left: 10%;
    color: white;
}

.movieDetailPlot {
    position: absolute;
    top: 60%;
    left: 10%;
    color: white;
}

.movieDetailPoster {
    width: 20%;
    height: 60%;
    position: absolute;
    top: 25%;
    left: 65%;
    color: white;
    border: 2px solid silver;
}
</style>
