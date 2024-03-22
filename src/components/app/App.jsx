import { useState } from "react";
import "./App.css";
import SearchBar from "../searchbar/SearchBar";
import ImageGallery from "../imagegallery/ImageGallery";
import Loader from "../loader/Loader";
import ErrorMessage from "../errormessage/ErrorMessage.jsx";
import LoadMoreBtn from "../loadmorebtn/LoadMoreBtn.jsx";
import ImageModal from "../imagemodal/ImageModal.jsx";
import { fetchImagesWithTopic } from "../../images-api.js";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // // Function to control the group number
  // const page = () => {};
  // // Controls the number of groups in the collection. In our case total number of pages is calculated on frontend
  // const totalPages = response.total_pages;

  // Використовуємо useEffect в масиві залежностей якого буде лише query і page
  // useEffect(() => { if (!query) return; }, [query, page]);

  const handleSearch = async (topic) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const receivedData = await fetchImagesWithTopic(topic);
      const imagesArray = receivedData.results;
      setImages(imagesArray);
      // Check the end of the collection to display an alert
      // if (page > totalPages) {
      //   return alert("We're sorry, there are no more posts to load");
      // }
      //page += 1;
    } catch (error) {
      setImages([]);
      setError(true);
    } finally {
      setLoading(false);
      //Кнопка LoadMoreBtn має рендеритися лише тоді, коли є які-небудь завантажені зображення. Якщо масив зображень порожній, кнопка не рендериться.
      // if (page > 1) {
      //   //показувати кнопку Load More
      // }
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} />}
      {images.length > 0 && <LoadMoreBtn />}
      {loading && <Loader />}
      <ImageModal />
    </>
  );
}

export default App;
