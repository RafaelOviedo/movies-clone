<template>
    <ul class="favouriteTitle">
        <li v-for="(movie, id) in moviesFavourites" :key="id">
            <p>{{ movie.title }}</p>
            <!-- <router-link>More info</router-link> -->
            <button>&times;</button>
        </li>
    </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "FavouriteMovies",
    computed: {
        ...mapState(["moviesFavourites"]),
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
