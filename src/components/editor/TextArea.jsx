import PropTypes from "prop-types";

const TextArea = ({ readOnly, input, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    // textarea.oninput = function() {
    // textarea.style.height = ""; /* Reset the height*/
    // textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
    // };
    e.target.style.height = "";
    e.target.style.height = Math.min(e.target.scrollHeight, 300) + "px";
    handleChange(e);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          id="multi-line-input"
          className="border-2 rounded w-full p-2 bg-white text-black dark:bg-gray-800 dark:text-white border-black dark:border-white"
          value={input}
          readOnly={readOnly}
          onChange={onChange}
          rows="5"
          placeholder={readOnly ? "Output log will be displayed here" : "Type something..."}
        ></textarea>
      </form>
    </>
  );
};

TextArea.propTypes = {
  readOnly: PropTypes.bool,
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea;
