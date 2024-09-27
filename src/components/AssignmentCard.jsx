import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useTextFile from "../hooks/useTextFile";
import { useEffect, useState } from "react";

const AssignmentCard = ({ id, day }) => {
  const navigate = useNavigate();
  const { text, loading, error } = useTextFile(day, id, "data.json");
  const [data, setData] = useState(null);

  // convert text to json
  useEffect(() => {
    if (!loading && !error && text) {
      const jsonData = JSON.parse(text);
      setData(jsonData);
    }
  }, [text, loading, error]);

  const handleClick = () => {
    navigate(`/day/${day}/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-4/5 h-24 cursor-pointer hover:bg-gray-200"
    >
      <div className="inline-block w-1/5 bg-green-600 dark:bg-gray-900 border border-black dark:border-white h-full text-center content-center">
        <h1 className="text-5xl">{id}</h1>
        <h2>{data ? (data.solved ? "Solved" : "Not solved") : "No data"}</h2>
      </div>
      <div className="inline-block w-4/5 bg-green-100 dark:bg-gray-500 border border-black dark:border-white h-full text-center content-center text-xl">{data ? data.title : "Loading..."}</div>
    </div>
  );
};

AssignmentCard.propTypes = {
  id: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
};

export default AssignmentCard;
