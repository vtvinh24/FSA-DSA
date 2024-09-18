import PropTypes from "prop-types";

const BackButton = ({ onClick, hidden }) => {
  return (
    <button
      onClick={onClick} hidden={hidden}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
    >
      Back
    </button>
  );
};

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  hidden: PropTypes.bool,
};

export default BackButton;
