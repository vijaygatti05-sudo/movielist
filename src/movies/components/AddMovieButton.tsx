import { useMovies } from "movies/MovieContext";

export function AddMovieButton({ toggleAddForm }: any) {

    const { toggleShowAddMovieForm } = useMovies();
  
  const handleToggle = () => {
    toggleShowAddMovieForm();
  };

  return (
    <div onClick={handleToggle}
      style={{
        cursor: "pointer",
        paddingTop: "7rem",
        paddingBottom: "7rem",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "8rem" }}>+</div>
      <div className="button-label">Add movie</div>
    </div>
  );
}
