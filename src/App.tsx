import "./App.css";

import { Header } from "./shared/components";
import { MovieList } from "./movies/components";

function App() {
  return (
    <div className="App">
      <Header title="React Movie Management Application" />
      <div className="mt-5">
        <div className="container-fluid">
          <div className="d-flex flex-row">
            <div className="col-sm-12">
              <MovieList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
