import { MovieCard } from "./MovieCard";
import { AddMovieButton } from "./AddMovieButton";
import { AddMovieForm } from "./AddMovieForm";
import { Card } from "shared/components";
import { getInitialMovies } from "data/initial";
import { Movie } from "movies/MovieModel";
import { useReducer } from "react";
import { State, Action, movieReducer } from "movies/MoviesRecuder";



export const MovieList = () => {

  const initialState: State = {
    movies: getInitialMovies(),
    showAddMovieForm: false,
  };

    const [state, dispatch] = useReducer(movieReducer, initialState);

  const addMovie = (newMovie: Movie) => {
    dispatch({
                type: "ADD_MOVIE",
                payload: newMovie,
              })
  };

   const deleteMovie = (id : string) => {
    dispatch({ type: "DELETE_MOVIE", payload: id })
  };


  const rateMovie = (id: string, rating: number) => {
    dispatch({
      type: "RATE_MOVIE",
      payload: { id, rating },
    })
  };

  const toggleShowAddMovieForm = () => {
    dispatch({ type: "TOGGLE_ADD_FORM" })
  };


  return (
    <div className="card-deck">
      {state.movies.map((movie) => (
        <Card key={movie.id}>
          {/* TODO: implement displaying movies list */}
          <MovieCard movie={movie}  onDeleteMovie={deleteMovie} onRateMovie={rateMovie}/>
        </Card>
      ))}
      {/* TODO: implement a toggle - show either a button or (after clicked) the form */}
      <Card>
        <AddMovieButton toggleAddForm={toggleShowAddMovieForm} />
      </Card>
      { state.showAddMovieForm &&
        <Card>
          <AddMovieForm onAddMovie={addMovie}/>
        </Card>
      }
    </div>
  );
};
