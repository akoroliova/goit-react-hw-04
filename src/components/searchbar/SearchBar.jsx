import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

    if (form.elements.topic.value.trim() === "") {
      toast("Please type your search request first!");
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="topic"
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
        />

        <button type="submit">Search</button>

        <Toaster />
      </form>
    </header>
  );
}
