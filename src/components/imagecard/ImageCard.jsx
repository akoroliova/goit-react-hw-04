export default function ImageCard({ url, title }) {
  return (
    <div>
      {/* <img src="" alt="" /> */}
      <a href={url} target="_blank" rel="noreferrer noopener">
        {title}
      </a>
    </div>
  );
}
