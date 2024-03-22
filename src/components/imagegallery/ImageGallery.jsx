import ImageCard from "../imagecard/ImageCard.jsx";
//import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export default function ImageGallery({ items }) {
  // const lightboxInstance = new SimpleLightbox(".gallery .gallery-link", {
  //   captions: true,
  //   captionsData: "alt_description",
  //   captionPosition: "bottom",
  // });

  return (
    <ul className="gallery">
      {items.map(({ id, urls, alt_description }) => (
        <li key={id}>
          <ImageCard src={urls.small} alt={alt_description} />
        </li>
      ))}
    </ul>
  );
}
