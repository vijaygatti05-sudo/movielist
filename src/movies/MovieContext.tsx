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
  UIState,
  UIReducer,
  UIAction,
} from "./MovieReducer";
import { getInitialMovies } from "data/initial";
import { Movie } from "./MovieModel";

type MovieContextType = {
  movieState: MovieState;
  movieDispatch: React.Dispatch<MovieAction>;
  UIState: UIState;
  UIDispatch: React.Dispatch<UIAction>;
};

export const MovieContext = createContext<MovieContextType | null>(null);

type Props = {
  children: ReactNode;
};

export const initialMovieState: MovieState = {
  movies: getInitialMovies(),
};

export const initialUIState: UIState = {
  showAddMovieForm: false,
};

export function MovieProvider({ children }: Props) {
  const [ movieState , movieDispatch] = useReducer(
    movieReducer,
    initialMovieState
  );

    const [ UIState , UIDispatch] = useReducer(
    UIReducer,
    initialUIState
  );


  return (
    <MovieContext.Provider
      value={{ movieState , movieDispatch, UIState , UIDispatch }}>
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

    const deleteMovie =  (id: string ) => context?.movieDispatch({
                type: "DELETE_MOVIE",
                payload: id,
              });

    const rateMovie = (id : string, rating : number ) => context?.movieDispatch({
                    type: "RATE_MOVIE",
                    payload: { id, rating },
                  });


    const  toggleAddForm=() => context?.UIDispatch({
                type: "TOGGLE_ADD_FORM"
              });
          
    const addMovie = (movie: Movie) => context.movieDispatch({
      type: "ADD_MOVIE",
      payload: movie
    }); 
  return {...context, deleteMovie, rateMovie, toggleAddForm, addMovie};
}