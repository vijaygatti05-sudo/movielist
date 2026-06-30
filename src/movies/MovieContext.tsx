import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
} from "react";

import {
  movieReducer,
  MovieState,
  MovieAction,
} from "./MovieReducer";
import { getInitialMovies } from "data/initial";
import { Movie } from "./MovieModel";

type MovieContextType = {
  state: MovieState;
  dispatch: React.Dispatch<MovieAction>;
};

export const MovieContext = createContext<MovieContextType | null>(null);

type Props = {
  children: ReactNode;
};

export const initialState: MovieState = {
  movies: getInitialMovies(),
  showAddMovieForm: false,
};

export function MovieProvider({ children }: Props) {
  const [state, dispatch] = useReducer(
    movieReducer,
    initialState
  );

  return (
    <MovieContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error(
      "useMovies must be used inside MovieProvider"
    );
  }

    const deleteMovie =  (id: string ) => context?.dispatch({
                type: "DELETE_MOVIE",
                payload: id,
              });

    const rateMovie = (id : string, rating : number ) => context?.dispatch({
                    type: "RATE_MOVIE",
                    payload: { id, rating },
                  });


    const  toggleAddForm=() => context.dispatch({
                type: "TOGGLE_ADD_FORM"
              });
          
    const addMovie = (movie: Movie) => context.dispatch({
      type: "ADD_MOVIE",
      payload: movie
    }); 
  return {...context, deleteMovie, rateMovie, toggleAddForm, addMovie};
}