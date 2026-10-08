import { BrowserRouter, Routes, Route } from "react-router-dom";

import AiGeneratedPath from "./components/AiGeneratedPath";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<AiGeneratedPath />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
