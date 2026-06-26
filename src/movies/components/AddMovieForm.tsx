///////////////////////////////////////////////////////////////

import { useMovies } from "movies/MovieContext";
import { useState } from "react";
import { InputField, Button } from "shared/components";

export function AddMovieForm() {
  const [url, setUrl] = useState("???");
  const [title, setTitle] = useState("???");
  const [subtitle, setSubtitle] = useState("???");
  const [description, setDescription] = useState("???");


  const { dispatch } = useMovies();

  const handleSubmit = () => {
    
    dispatch({
      type: "ADD_MOVIE",
      payload: {
        id: crypto.randomUUID(),
        imageUrl : "./Kingsglaive_Final_Fantasy_XV.jpg",
        title,
        subtitle,
        description,
        ratings : []
      }
    });

    clearFields();
  };

  const clearFields = () => {
    setUrl("???");
    setTitle("???");
    setSubtitle("???");
    setDescription("???");
  }

  const handleClear = () => {
    clearFields();
      
  };

  return (
    <form className="p-4">
      <InputField name="Url" value={url} setter={setUrl} />
      <InputField name="Title" value={title} setter={setTitle} />
      <InputField name="Subtitle" value={subtitle} setter={setSubtitle} />
      <InputField name="Description" value={description} setter={setDescription}
      />

      <div className="text-center">
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handleClear}>Cancel</Button>
      </div>
    </form>
  );
}
