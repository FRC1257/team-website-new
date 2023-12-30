import EmblaCarousel from "../components/EmblaCarousel";
import "../embla.css";

const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const Home = () => {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} />
    </div>
  );
};

export default Home;
