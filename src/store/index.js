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

        removeMovieFavourite() {},
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
    },

    getters: {},
    modules: {},
});

export default store;
//   case "ADD_MOVIE_FAVORITE":
//             return {
//                 ...state,
//                 moviesFavourites: state.moviesFavourites.concat(action.payload),
//             };
//         case "GET_MOVIES":
//             return {
//                 ...state,
//                 moviesLoaded: action.payload.Search,
//             };
//         case "GET_MOVIE_DETAIL":
//             return {
//                 ...state,
//                 movieDetail: action.payload,
//             };
//         case "REMOVE_MOVIE":
//             return {
//                 ...state,
//                 moviesFavourites: state.moviesFavourites.filter(
//                     (movie) => movie.id !== action.payload //revisar
//                 ),
//             };
