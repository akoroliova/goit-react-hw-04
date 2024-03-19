import toast, { Toaster } from "react-hot-toast";

export default function SearchBar() {
  const notify = () => toast("Here is your toast.");
  return (
    <header>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>

        <br />

        <button onClick={notify}>Make me a toast</button>
        <Toaster />
      </form>
    </header>
  );
}
