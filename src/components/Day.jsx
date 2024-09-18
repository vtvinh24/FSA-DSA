import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Day = ({ day }) => {
  const navigate = useNavigate();
  return (
    <span
      className="flex flex-col items-center justify-center border border-blue-700 p-4 cursor-pointer w-24 h-24 hover:bg-lime-500 hover:transition-all duration-500"
      onClick={() => navigate(`/day/${day}`)}
    >
      <span className="day-number">{day}</span>
      <span className="day-progress">X/Y</span>
    </span>
  );
};

Day.propTypes = {
  day: PropTypes.number.isRequired,
};

export default Day;