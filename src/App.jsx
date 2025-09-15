import { Routes, Route, useLocation } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import { Navigate } from "react-router";
import { useLayoutEffect } from "react";

import "./index.css";
import FooterContact from "./components/FooterContact";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();

    useLayoutEffect(() => {
      // Scroll to the top of the page when the route changes
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location.pathname]);

    return children;
  };
  return (
    <>
      <NavBar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <FooterContact />
      </Wrapper>
    </>
  );
}

export default App;
