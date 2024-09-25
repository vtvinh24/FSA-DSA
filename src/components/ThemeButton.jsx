import PropTypes from "prop-types";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeButton = ({ dark, setDark }) => {
  const handleClick = () => {
    setDark(!dark);
  };

  return (
    <button
      onClick={handleClick}
      className="relative inline-flex items-center p-1 rounded-full w-12 h-6 cursor-pointer bg-gray-200 dark:bg-gray-700"
    >
      <span className="absolute left-1 transition-transform duration-300 transform dark:translate-x-6 translate-x-0 hidden dark:visible">
        <FaMoon className="text-black" />
      </span>
      <span className="absolute right-1 transition-transform duration-300 transform dark:translate-x-0 dark:hidden -translate-x-6 visible">
        <FaSun className="text-white" />
      </span>
      <span className="block w-full h-full bg-gray-300 rounded-full transition-transform duration-300 dark:bg-gray-500 border" />
    </button>
  );
};

ThemeButton.propTypes = {
  dark: PropTypes.bool.isRequired,
  setDark: PropTypes.func.isRequired,
};

export default ThemeButton;
