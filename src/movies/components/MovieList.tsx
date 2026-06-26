import { MovieCard } from "./MovieCard";
import { AddMovieButton } from "./AddMovieButton";
import { AddMovieForm } from "./AddMovieForm";
import { Card } from "shared/components";
import { useMovies } from "movies/MovieContext";

export const MovieList = () => {
 
  const { state, dispatch } = useMovies();


  return (
    <div className="card-deck">
      {state.movies.map((movie, index) => (
        <Card key={movie.id}>
          {/* TODO: implement displaying movies list */}
          <MovieCard movie={movie} 
                    onDeleteMovie={(id : string) => dispatch({
                type: "DELETE_MOVIE",
                payload: id,
              })}
               onRateMovie={(id : string, rating : number ) => dispatch({
                type: "RATE_MOVIE",
                payload: { id, rating },
              })}/>
        </Card>
      ))}
      <Card>
        <AddMovieButton toggleAddForm={() => dispatch({
                type: "TOGGLE_ADD_FORM"
              })} />
      </Card>
      { state.showAddMovieForm &&
        <Card>
          <AddMovieForm/>
        </Card>
      }
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