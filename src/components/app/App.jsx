import { useState } from "react";
import "./App.css";
import SearchBar from "../searchbar/SearchBar";
import ImageGallery from "../imagegallery/ImageGallery";
import Loader from "../loader/Loader";
import ErrorMessage from "../errormessage/ErrorMessage.jsx";
import LoadMoreBtn from "../loadmorebtn/LoadMoreBtn.jsx";
import ImageModal from "../imagemodal/ImageModal.jsx";
import { fetchImagesWithTopic } from "../../images-api.js";

// Відповідь від бекенда приходить об'єктом із всією необхідною інформацією. Там ти знайдеш масив зображень та загальну кількість груп для пагінації. Кожне зображення в масиві представлено об'єктом із великою кількістю інформації. В першу чергу тебе цікавлять посилання на різні за розміром версії зображення у властивості urls. Використовуй small версію для карток галереї, та regular версію для модального вікна.
// Не обмежуйся завданням, використовуй дані із об'єктів, щоб відобразити більше цікавої інформації в модальному вікні. Наприклад, про автора зображення, кількість лайків, опис і т.д.

function App() {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setImages({});
      setError(false);
      setLoading(true);
      const data = await fetchImagesWithTopic(topic);
      setImages(data);
    } catch (error) {
      setImages({});
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {error && <ErrorMessage />}

      {images.length > 0 && <ImageGallery items={images} />}

      {loading && <Loader />}

      <LoadMoreBtn />

      <ImageModal />
    </>
  );
}

export default App;
