import toast, { Toaster } from "react-hot-toast";

export default function SearchBar() {
  //Якщо під час натискання кнопки відправки форми текстове поле порожнє, покажи користувачеві сповіщення про те, що необхідно ввести текст для пошуку зображень. Ця перевірка виконується в компоненті SearchBar в момент відправки форми. Для сповіщень використовуй бібліотеку React Hot Toast.
  //прибрати <br />
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
