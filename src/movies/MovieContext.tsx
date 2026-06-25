// MovieContext.tsx

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { Movie } from "movies/MovieModel";
import { getInitialMovies } from "data/initial";

type MovieContextType = {
  movies: Movie[];
  showAddMovieForm: boolean;
  addMovie: (movie: Movie) => void;
  deleteMovie: (id: string) => void;
  rateMovie: (id: string, rating: number) => void;
  toggleShowAddMovieForm: () => void;
};

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: {  children: ReactNode }) => {
  const [movies, setMovies] = useState(getInitialMovies());
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);

  const addMovie = (newMovie: Movie) => {
    setMovies(prev => [...prev, newMovie]);
  };

  const deleteMovie = (id: string) => {
    setMovies(prev =>
      prev.filter(movie => movie.id !== id)
    );
  };

  const rateMovie = (id: string, rating: number) => {
    setMovies(prev =>
      prev.map(movie =>
        movie.id === id
          ? {
              ...movie,
              ratings: [...movie.ratings, rating],
            }
          : movie
      )
    );
  };

  const toggleShowAddMovieForm = () => {
    setShowAddMovieForm(prev => !prev);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        showAddMovieForm,
        addMovie,
        deleteMovie,
        rateMovie,
        toggleShowAddMovieForm,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error(
      "useMovies must be used within MovieProvider"
    );
  }

  return context;
};