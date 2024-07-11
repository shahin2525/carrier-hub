import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h1>Oops</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default ErrorPage;
