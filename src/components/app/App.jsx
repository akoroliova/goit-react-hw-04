import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "../searchbar/SearchBar";
import ImageGallery from "../imagegallery/ImageGallery";

function App() {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //try {const response = await axios.get("https://api.unsplash.com/"); console.log(response); }  catch (error) {console.error(error);}
    async function fetchImages() {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search?cat"
      );
      console.log(response);
      setImages(response.data.hits);
    }
    fetchImages();
  }, []);

  return (
    <>
      <SearchBar />

      {loading && <p>Loading data, please wait...</p>}

      {images.length > 0 && <ImageGallery items={images} />}
    </>
  );
}

export default App;
