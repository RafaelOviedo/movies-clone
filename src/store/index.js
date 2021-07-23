import { createStore } from "vuex";
import axios from "axios";

const url = `https://www.omdbapi.com/?apikey=20dac387&s=avengers`;
//Create store
const store = createStore({
    state: {
        moviesFavourites: [],
        moviesLoaded: [],
        movieDetail: {},
        count: 0,
    },
    mutations: {
        //mutations are syncronous to change state
        addMovie(state, payload) {
            state.moviesLoaded = state.moviesLoaded.concat(payload);
        },

        increment(state) {
            state.count++;
        },
    },
    actions: {
        async fetchMovies({ commit }) {
            let response = await axios.get(url);
            commit("addMovie", response.data);
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
