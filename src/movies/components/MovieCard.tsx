import { StarRating, Button } from "shared/components";

import { getAvgRating, Movie } from "movies/MovieModel";
import { getInitialMovies } from "data/initial";


export const MovieCard = ({ movie, onDeleteMovie, onRateMovie }: any) => {
  const movieRating = getAvgRating(movie);

  const handleDelete = () => {
    onDeleteMovie(movie.id);    
  };

  const handleMovieRate = (i : number) => {
    onRateMovie(movie.id, i);
  };

  return (
    <div data-testid={`movie-item-${movie.id}`}>
      <img className="card-img-top" src={movie.imageUrl} alt="" />
      <div className="card-body">
        <h4 className="card-title">{movie.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
        <p className="text-justify" style={{ fontSize: "14px" }}>
          {movie.description}
        </p>
        {/* TODO: Implement delete functionality */}
        <Button onClick={handleDelete}>Delete</Button>
      </div>
      <div className="card-footer">
        <div className="clearfix">
          <div className="float-left mt-1">
            {/* TODO: Implement rating functionality */}
            <StarRating rating={movieRating} onRate={(i) => handleMovieRate(i)} />
          </div>
          <div
            data-testid="movie-rating"
            className="card-footer-badge float-right badge badge-primary badge-pill"
          >
            {movieRating}
          </div>
        </div>
      </div>
    </div>
  );
};
