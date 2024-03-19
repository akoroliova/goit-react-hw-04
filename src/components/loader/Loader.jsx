import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <ThreeDots
        height="100"
        width="100"
        color="teal"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}
