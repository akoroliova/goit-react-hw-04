import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "../searchbar/SearchBar";
import ImageGallery from "../imagegallery/ImageGallery";
import Loader from "../loader/Loader";
import ErrorMessage from "../errormessage/ErrorMessage.jsx";

function App() {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search?cat"
        );
        console.log(response);
        setImages(response.data.hits);
      } catch (error) {
        setImages({});
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  return (
    <>
      <SearchBar />

      {error && <ErrorMessage />}

      {images.length > 0 && <ImageGallery items={images} />}

      {loading && <Loader />}
    </>
  );
}

export default App;
