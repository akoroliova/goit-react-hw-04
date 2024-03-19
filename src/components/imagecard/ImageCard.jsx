export default function ImageCard({ url, title }) {
  return (
    <div>
      <a href={url} target="_blank" rel="noreferrer noopener">
        {title}
      </a>
    </div>
  );
}
