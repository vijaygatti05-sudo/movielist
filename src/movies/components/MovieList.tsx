import { MovieCard } from "./MovieCard";
import { AddMovieButton } from "./AddMovieButton";
import { AddMovieForm } from "./AddMovieForm";
import { Card } from "shared/components";
import { getInitialMovies } from "data/initial";
import { useState } from "react";
import { Movie } from "movies/MovieModel";

export const MovieList = () => {
  const [movies, setMovies] = useState(getInitialMovies());
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);

  const addMovie = (newMovie: Movie) => {
    setMovies(prev => [...prev, newMovie]);
  };

   const deleteMovie = (id : string) => {
    setMovies(prev => prev.filter(movie => movie.id !== id));
  };


  const rateMovie = (id: string, rating: number) => {
    setMovies(prev =>
      prev.map(movie =>
        movie.id === id
          ? { ...movie, ratings: [...movie.ratings, rating] }
          : movie
      )
    );
  };

  const toggleShowAddMovieForm = () => {
    setShowAddMovieForm(prev => !prev );
  };


  return (
    <div className="card-deck">
      {movies.map((movie, index) => (
        <Card key={index}>
          {/* TODO: implement displaying movies list */}
          <MovieCard movie={movie}  onDeleteMovie={deleteMovie} onRateMovie={rateMovie}/>
        </Card>
      ))}
      {/* TODO: implement a toggle - show either a button or (after clicked) the form */}
      <Card>
        <AddMovieButton toggleAddForm={toggleShowAddMovieForm} />
      </Card>
      { showAddMovieForm &&
        <Card>
          <AddMovieForm onAddMovie={addMovie}/>
        </Card>
      }
    </div>
  );
};
