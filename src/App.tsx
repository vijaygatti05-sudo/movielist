import "./App.css";

import { Header } from "./shared/components";
import { MovieList } from "./movies/components";
import { MovieContext, MovieProvider } from "movies/MovieContext";
import { getInitialMovies } from "data/initial";
import { movieReducer, MovieState, UIReducer, UIState } from "movies/MovieReducer";
import { useReducer } from "react";

function App() {
  const initialmovieState: MovieState = {
    movies: getInitialMovies(),
  };
  
  const initialUIState: UIState = {
    showAddMovieForm: false,
  };
  
    const [movieState, movieDispatch] = useReducer(
      movieReducer,
      initialmovieState
    );
    
    const [UIState, UIDispatch] = useReducer(
      UIReducer,
      initialUIState
    );
  return (
    <div className="App">
      <Header title="React Movie Management Application" />
      <div className="mt-5">
        <div className="container-fluid">
          <div className="d-flex flex-row">
            <div className="col-sm-12">
              <div><h1>MovieContext Provider</h1> </div>
              <MovieContext.Provider value={{movieState, movieDispatch, UIState, UIDispatch}}>
                <MovieList />
              </MovieContext.Provider>
              <div><h1>MovieProvider</h1></div>
              <MovieProvider>
                <MovieList />
              </MovieProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
