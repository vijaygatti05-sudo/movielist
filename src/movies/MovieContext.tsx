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

type MovieContextType = {
  state: MovieState;
  dispatch: React.Dispatch<MovieAction>;
};

const MovieContext = createContext<MovieContextType | null>(null);

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

  return context;
}