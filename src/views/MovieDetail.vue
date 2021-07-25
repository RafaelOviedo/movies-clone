<template>
    <div class="movieDetailComponent">
        <p class="movieDetailHeader">Movie Detail</p>
        <div class="movieDetailContainer">
            <p class="movieDetailTitle">Title: {{ movieDetail.Title }}</p>
            <p class="movieDetailRelease">
                Release date: {{ movieDetail.Released }}
            </p>
            <p class="movieDetailGenre">Genre: {{ movieDetail.Genre }}</p>
            <p class="movieDetailRating">
                Rating: {{ movieDetail.imdbRating }}
            </p>
            <p class="movieDetailRuntime">Runtime: {{ movieDetail.Runtime }}</p>
            <p class="movieDetailLanguage">
                Language: {{ movieDetail.Language }}
            </p>
            <p class="movieDetailCountry">Country: {{ movieDetail.Country }}</p>
            <p class="movieDetailPlot">Plot: {{ movieDetail.Plot }}</p>
        </div>

        <img
            class="movieDetailPoster"
            :src="`${movieDetail.Poster}`"
            alt="moviePoster"
        />
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
    width: 50%;
    position: absolute;
    top: 70%;
    left: 9%;
    color: white;
}

.movieDetailPoster {
    width: 20%;
    height: 60%;
    position: absolute;
    top: 27%;
    left: 65%;
    color: white;
    border: 2px solid silver;
    border-radius: 20px;
}
</style>
