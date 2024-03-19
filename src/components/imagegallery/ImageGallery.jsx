import ImageCard from "../imagecard/ImageCard.jsx";

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map(({ objectID, url, title }) => (
        <li key={objectID}>
          <ImageCard url={url} title={title} />
        </li>
      ))}
    </ul>
  );
}
