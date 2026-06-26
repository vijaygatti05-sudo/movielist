import "./App.css";

import { Header } from "./shared/components";
import { MovieList } from "./movies/components";
import { MovieProvider } from "movies/MovieContext";

function App() {
  return (
    <div className="App">
      <Header title="React Movie Management Application" />
      <div className="mt-5">
        <div className="container-fluid">
          <div className="d-flex flex-row">
            <div className="col-sm-12">
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
