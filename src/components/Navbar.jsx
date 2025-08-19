import { Link, useLocation } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-white dark:bg-gray-800 shadow-md">
      <div className="flex space-x-4">
        <Link
          to="/persona/gun"
          className={`${
            location.pathname.includes("gun") ? "font-bold text-blue-500" : ""
          }`}
        >
          Gun Park
        </Link>
        <Link
          to="/persona/goo"
          className={`${
            location.pathname.includes("goo") ? "font-bold text-blue-500" : ""
          }`}
        >
          Goo Kim
        </Link>
      </div>
      {/* <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
      >
        {darkMode ? "Light" : "Dark"}
      </button> */}
    </nav>
  );
}

export default Navbar;
