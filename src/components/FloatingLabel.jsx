import PropTypes from "prop-types";

const FloatingLabel = ({ label, fgColor, bgColor }) => {
  return <div style={{ color: fgColor, backgroundColor: bgColor }}>{label}</div>;
};

FloatingLabel.propTypes = {
  label: PropTypes.string.isRequired,
  fgColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default FloatingLabel;
