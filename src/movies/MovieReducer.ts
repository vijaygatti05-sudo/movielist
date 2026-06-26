import { Movie } from "./MovieModel";
import { getInitialMovies } from "data/initial";

export type MovieState = {
  movies: Movie[];
  showAddMovieForm: boolean;
};

export type MovieAction =
  | { type: "ADD_MOVIE"; payload: Movie }
  | { type: "DELETE_MOVIE"; payload: string }
  | { type: "RATE_MOVIE"; payload: { id: string; rating: number } }
  | { type: "TOGGLE_ADD_FORM" };


export function movieReducer( state: MovieState, action: MovieAction ): MovieState {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter(
          movie => movie.id !== action.payload
        ),
      };

    case "RATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.id === action.payload.id
            ? {
                ...movie,
                ratings: [
                  ...movie.ratings,
                  action.payload.rating,
                ],
              }
            : movie
        ),
      };

    case "TOGGLE_ADD_FORM":
      return {
        ...state,
        showAddMovieForm: !state.showAddMovieForm,
      };

    default:
      return state;
  }
}