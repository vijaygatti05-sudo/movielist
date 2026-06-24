import { MovieCard } from "./MovieCard";
import { AddMovieButton } from "./AddMovieButton";
import { AddMovieForm } from "./AddMovieForm";
import { Card } from "shared/components";
import { getInitialMovies } from "data/initial";
import { useState } from "react";
import { Movie } from "movies/MovieModel";

export const MovieList = () => {
  const [movies, setMovies] = useState(getInitialMovies());

  const addMovie = (newMovie: Movie) => {
    setMovies(prev => [...prev, newMovie]);
  };

  return (
    <div className="card-deck">
      {movies.map((movie, index) => (
        <Card key={index}>
          {/* TODO: implement displaying movies list */}
          <MovieCard movie={movie} />
        </Card>
      ))}
      {/* TODO: implement a toggle - show either a button or (after clicked) the form */}
      <Card>
        <AddMovieButton />
      </Card>
      <Card>
        <AddMovieForm onAddMovie={addMovie}/>
      </Card>
    </div>
  );
};
