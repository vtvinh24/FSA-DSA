import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackButton from "./components/BackButton";
import Spinner from "./components/Spinner";
import "./index.css";
import Nav from "./layouts/Nav";

// const Assignments = lazy(() => import("./routes/Assignments"));
import Assignments from "./routes/Assignments";
// const AssignmentDetail = lazy(() => import("./routes/AssignmentDetail"));
import AssignmentDetail from "./routes/AssignmentDetail";
// const Overview = lazy(() => import("./routes/Overview"));
import Overview from "./routes/Overview";
// const NotFound = lazy(() => import("./routes/NotFound"));
import NotFound from "./routes/NotFound";

function App() {
  const [dark, setDark] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(dark));
    if (dark) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }, [dark]);

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <BrowserRouter>
      <div className="">
        <BackButton
          onClick={handleBackClick}
          hidden={true}
        />
        <Nav
          dark={dark}
          setDark={setDark}
        />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route
              exact
              path="/day/:day"
              element={<Assignments />}
            />
            <Route
              exact
              path="/day/:day/:id"
              element={<AssignmentDetail dark={dark} />}
            />
            <Route
              exact
              path="/"
              element={<Overview />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
