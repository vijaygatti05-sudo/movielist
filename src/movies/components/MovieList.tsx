import { MovieCard } from "./MovieCard";
import { AddMovieButton } from "./AddMovieButton";
import { AddMovieForm } from "./AddMovieForm";
import { Card } from "shared/components";
import { getInitialMovies } from "data/initial";

const movies = getInitialMovies();

export const MovieList = () => {

  return (
    <div className="card-deck">
      {movies.map((movie) => (
        <Card>
          {/* TODO: implement displaying movies list */}
          <MovieCard />
        </Card>
      ))}
      {/* TODO: implement a toggle - show either a button or (after clicked) the form */}
      <Card>
        <AddMovieButton />
      </Card>
      <Card>
        <AddMovieForm />
      </Card>
    </div>
  );
};
