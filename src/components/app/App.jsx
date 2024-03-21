import { useState } from "react";
import "./App.css";
import SearchBar from "../searchbar/SearchBar";
import ImageGallery from "../imagegallery/ImageGallery";
import Loader from "../loader/Loader";
import ErrorMessage from "../errormessage/ErrorMessage.jsx";
import LoadMoreBtn from "../loadmorebtn/LoadMoreBtn.jsx";
import ImageModal from "../imagemodal/ImageModal.jsx";
import { fetchImagesWithTopic } from "../../images-api.js";

// Відповідь від бекенда приходить об'єктом із всією необхідною інформацією. Там ти знайдеш масив зображень та загальну кількість груп для пагінації.

// Використовуємо useEffect в масиві залежностей якого буде лише query і page
// useEffect(() => { if (!query) return; }, [query, page]);

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const imagesArray = await fetchImagesWithTopic(topic);
      setImages(imagesArray);
    } catch (error) {
      setImages([]);
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
