export function AddMovieButton({ toggleAddForm }: any) {

  const handleToggle = () => {
    toggleAddForm();
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
