export function AddMovieButton() {
  return (
    <div
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
