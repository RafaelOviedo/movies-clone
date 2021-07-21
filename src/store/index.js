import { createStore } from "vuex";
import axios from "axios";

const url = `https://www.omdbapi.com/?apikey=20dac387&s=avengers`;
//Create store
const store = createStore({
    state: {
        moviesFavourites: [],
        moviesLoaded: [],
        movieDetail: {},
    },
    mutations: {
        //mutations are syncronous to change state
        addMovieFavourite(state, payload) {
            state.moviesFavourites = state.moviesFavourites.concat(payload);
        },
        getMovies(state, payload) {
            state.moviesLoaded = payload;
        },
    },
    actions: {
        async getMovies(state) {
            let response = await axios.get(url);
            state.commit("getMovies", response.data);
        },
    },
    getters: {
        getMovies(state) {
            return state.moviesLoaded;
        },
    },
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
