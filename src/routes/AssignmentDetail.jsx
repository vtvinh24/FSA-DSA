import PropTypes from "prop-types";
import { lazy, useEffect, useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { FaClipboard, FaPlay } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavigateButton from "../components/NavigateButton";
// const CodeViewer = lazy(() => import("../components/editor/CodeViewer"));
import CodeViewer from "../components/editor/CodeViewer";
import TextArea from "../components/editor/TextArea";
import useTextFile from "../hooks/useTextFile";

const AssignmentDetail = ({ dark }) => {
  const { day, id } = useParams();
  const { text, loading, error } = useTextFile(day, id, "solution.js");
  const { text: data, loading: dataLoading, error: dataError } = useTextFile(day, id, "data.json");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [lang, setLang] = useState("javascript");
  const [meta, setMeta] = useState({});
  const navigate = useNavigate();
  const [time, setTime] = useState(0);

  const fillSample = () => {
    let tmp = JSON.parse(data);
    let sample = tmp.sample.input.join("\n");
    setInput(sample);
    // how to trigger the textarea onChange here?
  };

  const handleChangeLang = (e) => {
    setLang(e.target.value);
  };

  useEffect(() => {
    try {
      if (data) {
        // Check if data exists
        const parsedData = JSON.parse(data); // Try parsing the JSON data
        setMeta(parsedData); // Set the parsed data into meta
      }
      // else {
      //   // console.log("No data to parse.");
      // }
    } catch (error) {
      console.error("Error parsing JSON in useEffect:", error); // Log parsing errors
    }
  }, [data]);

  const runCode = () => {
    setOutput("");
    setTime(0);
    try {
      if (lang === "javascript") {
        const mainFunc = new Function("args", text);
        const args = input.split("\n");
        const result = mainFunc(args);
        setOutput(result !== undefined ? result.toString() : "No output");
      } else {
        setOutput("Language not supported yet");
      }
    } catch (e) {
      setOutput(`Error: ${e.message}`);
    }
  };

  const navigateToPrev = () => {
    const [currentDay, currentId] = [parseInt(day), parseInt(id)];
    if (currentId > 1) {
      navigate(`/day/${currentDay}/${currentId - 1}`);
    } else if (currentDay > 1) {
      navigate(`/day/${currentDay - 1}/5`);
    }
  };

  const navigateToNext = () => {
    const [currentDay, currentId] = [parseInt(day), parseInt(id)];
    if (currentId < 5) {
      navigate(`/day/${currentDay}/${currentId + 1}`);
    } else {
      navigate(`/day/${currentDay + 1}/1`);
    }
  };

  return (
    <div
      id="asm-detail"
      className="mx-40"
    >
      <div
        id="asm-info"
        className="flex flex-col items-center justify-center"
      >
        <h1 className="mb-8 text-4xl font-bold mt-20 text-theme">
          Assignment {day}.{id}: {meta.title}
        </h1>

        {/* <p className="text-theme">
          Assignment #{id} of Day {day}
        </p> */}
        <Link to={`/day/${day}`}>
          <span className="inline-flex items-center gap-2 hover:text-blue-500">
            <FaArrowCircleLeft />
            Back to Day {day}
          </span>
        </Link>
        <a
          className="cursor-pointer"
          href={meta.link}
        >
          <span className="inline-flex items-center gap-2 hover:text-blue-500">
            Go to Problem <FaArrowCircleRight />
          </span>
        </a>
      </div>
      <div
        id="nav-btn"
        className="flex justify-center gap-2 mt-10"
      >
        <NavigateButton onClick={navigateToPrev}>Prev</NavigateButton>
        <NavigateButton onClick={navigateToNext}>Next</NavigateButton>
      </div>

      <div id="solution">
        {/* <h2 className="text-theme">Solution</h2> */}
        <div className="inline-flex me-2">Language</div>
        <select
          onChange={handleChangeLang}
          value={lang}
          className="border dark:border-white border-black p-2 rounded dark:text-white dark:bg-gray-800"
        >
          <option value="javascript">Javascript</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="c">C</option>
          <option value="text">Plain Text</option>
        </select>
          
        {loading ? (
          <p>Loading code...</p>
        ) : error ? (
          <p>Error loading code: {error}</p>
        ) : (
          <div className="max-h-screen overflow-scroll border-theme mt-4 rounded">
            <CodeViewer
              code={text}
              language={lang}
              dark={dark}
            />
          </div>
        )}
      </div>

      <div
        id="input"
        className="mt-20 text-theme"
      >
        <h2>Input</h2>
        <TextArea
          readOnly={false}
          input={input}
          handleChange={(e) => setInput(e.target.value)}
        />
        <div
          id="input-btn"
          className="flex gap-2"
        >
          <span
            onClick={fillSample}
            className="inline-flex items-center gap-2 border-theme bg-hover rounded p-2 cursor-pointer"
          >
            <span className="text-theme">Sample input</span>
            <FaClipboard />
          </span>
          <span
            onClick={runCode}
            className="inline-flex items-center gap-2 border-theme bg-hover rounded p-2 cursor-pointer"
          >
            <span className="text-theme">Run code</span>
            <FaPlay />
          </span>
          {/* <span className="inline-flex items-center ms-2">Execution time: {time}ms</span> */}
        </div>
      </div>

      <div
        id="output"
        className="mt-20"
      >
        <h2 className="text-theme">Output</h2>
        <TextArea
          readOnly={true}
          input={output}
          handleChange={() => {}}
        />
      </div>

      <div
        id="nav-btn"
        className="flex justify-between mt-10"
      >
        <NavigateButton onClick={navigateToPrev}>Prev</NavigateButton>
        <NavigateButton onClick={navigateToNext}>Next</NavigateButton>
      </div>
    </div>
  );
};

AssignmentDetail.propTypes = {
  dark: PropTypes.bool.isRequired,
};

export default AssignmentDetail;
