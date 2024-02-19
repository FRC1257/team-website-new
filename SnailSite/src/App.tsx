import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Leadership from "./pages/Leadership";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

import LinkTree from "./pages/LinkTree";

import ParagraphSection from "./components/ParagraphSection";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/linktree" element={<LinkTree />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/test" element={<ParagraphSection />} />
        {/* <Route path="/t2" element={<BlobText />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
