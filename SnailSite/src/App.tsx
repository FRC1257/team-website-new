import {
  // BrowserRouter,
  // Routes,
  // Route,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Leadership from "./pages/Leadership";
import Donate from "./pages/Donate";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

import LinkTree from "./pages/LinkTree";

// import ParagraphSection from "./components/ParagraphSection";
import Info from "./pages/Info";
import Awards from "./pages/Awards";
// import Outreach from "./pages/Outreach";
import Support from "./pages/Support";
import Sponsors from "./pages/Sponsors";
import Gallery from "./pages/Gallery";
import OutreachRouter from "./pages/OutreachRouter";
import Navbar2 from "./components/Navbar2";

const Layout = () => (
  <>
    <Navbar2 />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "info",
        element: <Info />,
      },
      {
        path: "awards",
        element: <Awards />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "sponsors",
        element: <Sponsors />,
      },
      {
        path: "leadership",
        element: <Leadership />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
      {
        path: "linktree",
        element: <LinkTree />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "outreach/*",
        element: <OutreachRouter />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     {/* <Route path="/" element={<Home />} /> */}
    //     {/* <Route path="/info" element={<Info />} /> */}
    //     {/* <Route path="/awards" element={<Awards />} /> */}
    //     {/* <Route path="/outreach/*" element={<OutreachRouter />} /> */}
    //     {/* <Route path="/support" element={<Support />} /> */}
    //     {/* <Route path="/sponsors" element={<Sponsors />} /> */}
    //     {/* <Route path="/notfound" element={<NotFound />} /> */}
    //     {/* <Route path="/leadership" element={<Leadership />} /> */}
    //     {/* <Route path="/donate" element={<Donate />} /> */}
    //     {/* <Route path="/linktree" element={<LinkTree />} /> */}
    //     {/* <Route path="*" element={<NotFound />} /> */}
    //     {/* <Route path="/gallery" element={<Gallery />} /> */}

    //     {/* <Route path="/test" element={<ParagraphSection />} /> */}
    //     {/* <Route path="/t2" element={<BlobText />} /> */}
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
  );
}

export default App;
