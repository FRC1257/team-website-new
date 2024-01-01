import EmblaCarousel from "../components/EmblaCarousel";
import Section from "../components/Section";
import "../embla.css";

const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const Home = () => {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} />
      <Section
        heading="Header"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        imgSrc="pics/slide-1.jpg"
        button={{
          text: "Learn more",
          style: "bg-red-800 hover:bg-red-700 text-white mt-10",
          to: "/info",
        }}
      />
    </div>
  );
};

export default Home;
