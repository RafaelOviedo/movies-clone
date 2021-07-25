import { createStore } from "vuex";
import axios from "axios";

//Create store
const store = createStore({
    state: {
        moviesFavourites: [],
        moviesLoaded: [],
        movieDetail: {},
    },

    mutations: {
        //mutations are syncronous to change state
        addMovie(state, payload) {
            state.moviesLoaded = payload;
        },

        addMovieDetail(state, payload) {
            state.movieDetail = payload;
        },

        addMovieToFavourites(state, payload) {
            state.moviesFavourites.push(payload);
        },

        removeMovieFavourite(state, payload) {
            state.moviesFavourites = state.moviesFavourites.filter(
                (movie) => payload !== movie.id
            );
        },
    },

    actions: {
        async fetchMovies({ commit }, titulo) {
            let response = await axios.get(
                `https://www.omdbapi.com/?apikey=20dac387&s=` + titulo
            );
            commit("addMovie", response.data.Search);
        },

        async fetchMovieId({ commit }, id) {
            let response = await axios.get(
                `https://www.omdbapi.com/?apikey=20dac387&i=` + id
            );
            commit("addMovieDetail", response.data);
        },

        addMovieToFavourites({ commit }, payload) {
            commit("addMovieToFavourites", payload);
        },

        removeMovieFavourite({ commit }, payload) {
            commit("removeMovieFavourite", payload);
        },
    },

    getters: {},
    modules: {},
});

export default store;
