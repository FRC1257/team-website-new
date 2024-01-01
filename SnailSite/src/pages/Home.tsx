import CTA from "../components/CTA";
import EmblaCarousel from "../components/EmblaCarousel";
import Section, { SectionProps } from "../components/Section";
import { carouselLen } from "../components/imageByIndex";
import "../embla.css";

const SLIDE_COUNT = carouselLen + 1;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const sectionOneBody: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
const sectionOne: SectionProps = {
  heading: "Header",
  body: sectionOneBody,
  imgSrc: "pics/slide-1.jpg",
  button: {
    text: "Learn more",
    style: "bg-red-800 hover:bg-red-700 text-white",
    to: "/info",
  },
};

const sectionTwoBody: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
const sectionTwo: SectionProps = {
  textLeft: true,
  heading: "Header",
  body: sectionTwoBody,
  imgSrc: "pics/slide-2.jpg",
  button: {
    text: "Learn more",
    style: "bg-red-800 hover:bg-red-700 text-white",
    to: "/info",
  },
};

const ctaBody: string = `We are very very cool so that's why you should give us money pls.`;
const cta: SectionProps = {
  heading: "Call to Action",
  body: ctaBody,
  imgSrc: "pics/slide-1.jpg",
  button: {
    text: "Learn more",
    style: "bg-red-800 hover:bg-red-700 text-white",
    to: "/info",
  },
};

const Home = () => {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} />
      <div className="py-12 bg-red-100">
        <Section {...sectionOne} />
        <Section {...sectionTwo} />
        <CTA {...cta} />
      </div>
    </div>
  );
};

export default Home;
