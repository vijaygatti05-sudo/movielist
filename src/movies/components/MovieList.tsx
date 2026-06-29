import { MovieCard } from "./MovieCard";
import { AddMovieButton } from "./AddMovieButton";
import { AddMovieForm } from "./AddMovieForm";
import { Card } from "shared/components";
import { useMovies } from "movies/MovieContext";
// import { useMemo } from "react";

export const MovieList = () => {
 
  const { state, dispatch } = useMovies();

  // const topMovie = useMemo(() => {
  //   console.log(
  //     "Finding top movie..."
  //   );

  //   const start = Date.now();

  //   // Block the main thread for 5 seconds
  //   while (Date.now() - start < 2000) {}  

  //   return [...state.movies]
  //     .sort((a, b) => {
  //       const avgA =
  //         a.ratings.length
  //           ? a.ratings.reduce(
  //               (x, y) => x + y,
  //               0
  //             ) / a.ratings.length
  //           : 0;

  //       const avgB =
  //         b.ratings.length
  //           ? b.ratings.reduce(
  //               (x, y) => x + y,
  //               0
  //             ) / b.ratings.length
  //           : 0;

  //       return avgB - avgA;
  //     })[0];
  // }, [state.movies]);

  return (
    <div>
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
          {/* <div>
          Top Movie: {topMovie.title}
      </div> */}
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