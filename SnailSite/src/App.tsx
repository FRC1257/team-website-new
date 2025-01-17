import { createBrowserRouter, Outlet, RouterProvider, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Leadership from "./pages/Leadership";
import Donate from "./pages/Donate";
import Footer from "./components/Footer";
import "./App.css";

import LinkTree from "./pages/LinkTree";

import Info from "./pages/Info";
import Awards from "./pages/Awards";
import Support from "./pages/Support";
import Sponsors from "./pages/Sponsors";
import Gallery from "./pages/Gallery";
import OutreachRouter from "./pages/OutreachRouter";
import Navbar from "./components/Navbar";
import { useLayoutEffect, PropsWithChildren } from "react";

const Scroller = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

const Layout = () => (
  <Scroller>
    <Navbar />
    <Outlet />
    <Footer />
  </Scroller>
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
  return <RouterProvider router={router} />;
}

export default App;
