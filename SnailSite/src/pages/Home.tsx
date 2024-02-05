import CallToAction, { CallToActionProps } from "../components/CallToAction";
import EmblaCarousel from "../components/EmblaCarousel";
import Section, { SectionProps } from "../components/Section";
import { carouselLen } from "../components/imageByIndex";
import "../embla.css";

const SLIDE_COUNT = carouselLen + 1;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const sectionOneBody: string = `Team 1257 Parallel Universe is an out of this world FIRST robotics team! We strive to inspire and cultivate a passion for STEM in a new generation of future innovators, leaders, and entrepreneurs. Through collaboration and teamwork, we design and curate a robot that competes in the FIRST Robotics Competition (FRC).`;
const sectionOne: SectionProps = {
  heading: "About Us",
  body: sectionOneBody,
  imgSrc: "pics/slide-1.jpg",
  button: {
    text: "Learn more",
    style: "bg-primary-800 hover:bg-primary-700 text-white",
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
    style: "bg-primary-800 hover:bg-primary-700 text-white",
    to: "/info",
  },
};

const ctaBody: string = `Running an award-winning robotics team takes lots of financial contribution. We appreciate all the help we can get!`;
const cta: CallToActionProps = {
  heading: "Support Us",
  body: ctaBody,
  imgSrc: "pics/slide-1.jpg",
  button: {
    text: "Learn more",
    style: "bg-white hover:bg-gray-300 text-black",
    to: "/info",
  },
  carouselProps: { slides: SLIDES },
};

// TODO: mobile friendly
const Home = () => {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} />
      <div className="py-12 bg-background">
        <Section {...sectionOne} />
        <Section {...sectionTwo} />
        <CallToAction {...cta} />
      </div>
    </div>
  );
};

export default Home;
