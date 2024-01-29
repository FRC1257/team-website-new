import CallToAction, { CallToActionProps } from "../components/CallToAction";
import EmblaCarousel from "../components/EmblaCarousel";
import Section, { SectionProps } from "../components/Section";
import { carouselLen } from "../components/imageByIndex";
import "../embla.css";

const SLIDE_COUNT = carouselLen + 1;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const sectionOneBody: string = `Team 1257 Parallel Universe is an unparalleled FIRST team that strives to inspire passion for STEM. We design and fabricate robots for the FIRST Robotics Competition (FRC) in order to develop talent in STEM and prepare a new generation of innovators, leaders, and entrepreneurs. Our aspiration is to create a community excited about STEM at the Union County Vocational-Technical Schools and beyond through FRC and our community outreach programs. We aim to create an environment where teamwork fuels creative problem solving`;
const sectionOne: SectionProps = {
  heading: "About Us",
  body: sectionOneBody,
  imgSrc: "pics/slide-1.jpg",
  button: {
    text: "Learn more",
    style: "bg-red-800 hover:bg-red-700 text-white",
    to: "/info",
  },
};

const sectionTwoBody: string = `Parallel Universe is deeply committed to STEM outreach and education. Through the Raritan Valley Science and Technology Showcase, of which Team 1257 was a co-host, we raised awareness of FIRST core values to people of all ages. Through this event, which takes year-long coordination to execute, we were able to spread FIRST’s message to over ten thousand attendees across two days. Furthermore, Team 1257 members regularly volunteer at various FLL events.`;
const sectionTwo: SectionProps = {
  textLeft: true,
  heading: "Our Impact",
  body: sectionTwoBody,
  imgSrc: "pics/slide-2.jpg",
  button: {
    text: "Learn more",
    style: "bg-red-800 hover:bg-red-700 text-white",
    to: "/info",
  },
};

const ctaBody: string = `We are very very cool so that's why you should give us money pls.`;
const cta: CallToActionProps = {
  heading: "Support Us",
  body: ctaBody,
  imgSrc: "pics/slide-1.jpg",
  button: {
    text: "Learn more",
    style: "bg-red-800 hover:bg-red-700 text-white",
    to: "/info",
  },
  carouselProps: { slides: SLIDES },
};

// TODO: mobile friendly
const Home = () => {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} />
      <div className="py-12 bg-red-100">
        <Section {...sectionOne} />
        <Section {...sectionTwo} />
        <CallToAction {...cta} />
      </div>
    </div>
  );
};

export default Home;
