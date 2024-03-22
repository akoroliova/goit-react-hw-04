import toast, { Toaster } from "react-hot-toast";

let topic;

export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    topic = form.elements.topic.value;

    if (topic.trim().length === 0) {
      toast("Please type your search request first!");
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <header>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-field"
          type="text"
          name="topic"
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
        />

        <button className="search-button" type="submit">
          Search
        </button>

        <Toaster />
      </form>
    </header>
  );
}
