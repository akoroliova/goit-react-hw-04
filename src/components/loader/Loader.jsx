import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <span className="loader">
      <ThreeDots
        height="100"
        width="100"
        color="teal"
        ariaLabel="three-dots-loading"
      />
    </span>
  );
}
