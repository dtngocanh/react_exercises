import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-4">
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found.</h1>
      <p className="mb-6 text-center text-gray-600">
        Sorry, this page doesn't exsit.
      </p>
      <Link className="hover:underline" to="/">
        Back HomePage
      </Link>
    </div>
  );
}

export default NotFound;
