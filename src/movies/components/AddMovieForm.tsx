import { InputField, Button } from "shared/components";

export function AddMovieForm() {
  const setter = () => console.error("AddMovieForm.setter not implemented yet");

  return (
    <form className="p-4 ">
      <InputField name="Url" value="???" setter={setter} />
      <InputField name="Title" value="???" setter={setter} />
      <InputField name="Subtitle" value="???" setter={setter} />
      <InputField name="Description" value="???" setter={setter} />
      <div className="text-center">
        {/* TODO: Implement form submission */}
        <Button>Submit</Button>
        {/* TODO: Implement form cancelling */}
        <Button>Cancel</Button>
      </div>
    </form>
  );
}
