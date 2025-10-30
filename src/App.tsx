import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import qwBgVid from "./assets/qw-bg-vid.webm";
import Header from "./components/Header";

function App() {
  return (
    <div className="relative min-h-screen mx-5">
      <Header />
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src={qwBgVid}
        autoPlay
        loop
        muted
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stack" element={<Stack />} />
      </Routes>
    </div>
  );
}

export default App;
