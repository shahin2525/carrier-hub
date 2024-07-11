import { Link } from "react-router-dom";
import "./ErrorPage.css";
const ErrorPage = () => {
  return (
    <div className="center">
      <div>
        <h1>Oops</h1>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
