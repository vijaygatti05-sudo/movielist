import { MovieCard } from "./MovieCard";
import { AddMovieButton } from "./AddMovieButton";
import { AddMovieForm } from "./AddMovieForm";
import { Card } from "shared/components";
import { useMovies } from "movies/MovieContext";
import { Movie } from "movies/MovieModel";
import { useEffect } from "react";
import { getremoteMovies } from "data/initial";
// import { useMemo } from "react";
import { moviesAPIurl } from "data/globalconstants" 
export const MovieList = () => {
 
  const delay =  (duration: number) => new Promise(res => setTimeout(res, duration));

  const { movieState, UIState, deleteMovie, rateMovie, toggleAddForm } = useMovies();

  const { initMovies } = useMovies();  

  useEffect(() => {
    const loadMovies = async () => {

      if(movieState?.movies?.length > 0)
        {
          return;
        }

      try 
      {
        console.log("inside loadMovies");
        const movies = await getremoteMovies();
        initMovies(movies);

      } catch (error) {
        console.log(error);
      }
    };

    loadMovies();
  }, []);

  return (
    <div>
      <div className="card-deck">
        {movieState?.movies?.map((movie, index) => (
          <Card key={movie.id}>
            <MovieCard movie={movie}             
                onDeleteMovie={deleteMovie}
                onRateMovie={rateMovie}/>
          </Card>
        ))}
        <Card>
          <AddMovieButton toggleAddForm={toggleAddForm} />
        </Card>
        { UIState.showAddMovieForm &&
          <Card>
            <AddMovieForm/>
          </Card>
        }
      </div>
    </div>
  );
};


// import { useMovies } from "movies/MovieContext";
// import { MovieCard } from "./MovieCard";
// import { AddMovieButton } from "./AddMovieButton";
// import { AddMovieForm } from "./AddMovieForm";
// import { Card } from "shared/components";
// import { Movie } from "movies/MovieModel";

// export const MovieList = () => {
//   const { state, dispatch } = useMovies();

//   return (
//     <div className="card-deck">
//       {state.movies.map(movie => (
//         <Card key={movie.id}>
//           <MovieCard
//             movie={movie}
//             onDeleteMovie={(id : string) =>
//               dispatch({
//                 type: "DELETE_MOVIE",
//                 payload: id,
//               })
//             }
//             onRateMovie={(id: string, rating: number) =>
//               dispatch({
//                 type: "RATE_MOVIE",
//                 payload: { id, rating },
//               })
//             }
//           />
//         </Card>
//       ))}

//       <Card>
//         <AddMovieButton
//           toggleAddForm={() =>
//             dispatch({
//               type: "TOGGLE_ADD_FORM",
//             })
//           }
//         />
//       </Card>

//       {state.showAddMovieForm && (
//         <Card>
//           <AddMovieForm/>
//         </Card>
//       )}
//     </div>
//   );
// };