import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center max-w-md bg-white p-8 rounded-xl shadow-lg">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="mx-auto mb-4 rounded-full shadow-md"
        />
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          Welcome to My Portfolio
        </h1>


        <Link to="/about">
          <button
            onClick={() => setClickCount((prev) => prev + 1)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Go to About
          </button>
        </Link>

        <p className="mt-4 text-sm text-gray-500">
          Button clicked: <span className="font-semibold">{clickCount}</span>{" "}
          times
        </p>
      </div>
    </div>
  );
}

export default Home;
