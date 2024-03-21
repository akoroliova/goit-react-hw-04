import ImageCard from "../imagecard/ImageCard.jsx";

export default function ImageGallery({ items }) {
  console.log(items);
  return (
    <ul>
      {items.map(({ id, urls, alt_description }) => (
        <li key={id}>
          <ImageCard src={urls.small} alt={alt_description} />
        </li>
      ))}
    </ul>
  );
}
