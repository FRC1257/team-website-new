import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Leadership from "./pages/Leadership";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import "./App.css";

import HomepageTest from "./components/testing/HomepageTest";

function App() {
  return (
    <div className="px-5 py-5">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/Leadership" element={<Leadership />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/test" element={<HomepageTest />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
