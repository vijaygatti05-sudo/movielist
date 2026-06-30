import "./App.css";

import { Header } from "./shared/components";
import { MovieList } from "./movies/components";
import { MovieContext, MovieProvider } from "movies/MovieContext";
import { getInitialMovies } from "data/initial";
import { movieReducer, MovieState } from "movies/MovieReducer";
import { useReducer } from "react";

function App() {
  const initialState: MovieState = {
    movies: getInitialMovies(),
    showAddMovieForm: false,
  };
  
    const [state, dispatch] = useReducer(
      movieReducer,
      initialState
    );
    
  return (
    <div className="App">
      <Header title="React Movie Management Application" />
      <div className="mt-5">
        <div className="container-fluid">
          <div className="d-flex flex-row">
            <div className="col-sm-12">
              <div><h1>MovieContext Provider</h1> </div>
              <MovieContext.Provider value={{state, dispatch}}>
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
