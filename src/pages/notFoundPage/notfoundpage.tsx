import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>
        Oops! The page you are looking for is not found.
        <Link to="/">Go to home</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
