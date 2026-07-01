import { MovieCard } from "./MovieCard";
import { AddMovieButton } from "./AddMovieButton";
import { AddMovieForm } from "./AddMovieForm";
import { Card } from "shared/components";
import { useMovies } from "movies/MovieContext";
import { Movie } from "movies/MovieModel";
import { useEffect } from "react";
// import { useMemo } from "react";

export const MovieList = () => {
 
  const delay = () => new Promise(res => setTimeout(res, 1000));


  const { movieState, UIState, deleteMovie, rateMovie, toggleAddForm } = useMovies();

    const { initMovies } = useMovies();
  
    const getMovies = async (): Promise<Movie[]> => {

    console.log("getMovies");
    
    // await delay(); 
    const response = await fetch("http://localhost:5089/movies");
    
    
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

        console.log(response);

    const data1 = await response.json();
    console.log(data1);

    // console.log("calling async getinitialmovies");
    // const data = getInitialMovies();
    return data1;
  };

  useEffect(() => {
    const loadMovies = async () => {

      if(movieState?.movies?.length > 0)
        {
          return;
        }

      try 
      {
        const movies = await getMovies();
        initMovies(movies);

      } catch (error) {
        console.log(error);
      }
    };

    loadMovies();
  }, []);


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
      {movieState.movies.map((movie, index) => (
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