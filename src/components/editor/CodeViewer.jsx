import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark, materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeViewer = ({ code, language, dark }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={dark ? materialDark : materialLight}
      showLineNumbers={true}
      wrapLongLines={true}
    >
      {code}
    </SyntaxHighlighter>
  );
};

CodeViewer.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  dark: PropTypes.bool.isRequired,
};

export default CodeViewer;
