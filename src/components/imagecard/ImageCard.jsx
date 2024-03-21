export default function ImageCard({
  src,
  alt = "Alternative text placeholder is empty",
}) {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
}
