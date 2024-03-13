import BlobText from "../components/BlobText";
import Button from "../components/Button";
// import CallToAction, { CallToActionProps } from "../components/CallToAction";
import EmblaCarousel from "../components/EmblaCarousel";
// import { CarouselProps } from "../components/EmblaCarousel";
// import NewSection from "../components/NewSection";
// import Section, { SectionProps } from "../components/Section";
import { carouselLen } from "../components/imageByIndex";
import "../embla.css";

// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import imageByIndex from "../components/imageByIndex";

import "./Home.css";

const SLIDE_COUNT = carouselLen + 1;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

// const sectionOneBody: string = `Team 1257 Parallel Universe is an out of this world FIRST robotics team! We strive to inspire and cultivate a passion for STEM in a new generation of future innovators, leaders, and entrepreneurs. Through collaboration and teamwork, we design and curate a robot that competes in the FIRST Robotics Competition (FRC).`;
// const sectionOne: SectionProps = {
//   heading: "About Us",
//   body: sectionOneBody,
//   imgSrc: "pics/slide-1.jpg",
//   button: {
//     text: "Learn more",
//     style: "bg-primary-800 hover:bg-primary-700 text-white",
//     to: "/info",
//   },
// };

// const sectionTwoBody: string = `Parallel Universe is deeply committed to STEM outreach and education. Through the Raritan Valley Science and Technology Showcase, of which Team 1257 was a co-host, we raised awareness of FIRST core values to people of all ages. Through this event, which takes year-long coordination to execute, we were able to spread FIRST’s message to over ten thousand attendees across two days. Furthermore, Team 1257 members regularly volunteer at various FLL events.`;
// const sectionTwo: SectionProps = {
//   textLeft: true,
//   heading: "Our Impact",
//   body: sectionTwoBody,
//   imgSrc: "pics/slide-2.jpg",
//   button: {
//     text: "Learn more",
//     style: "bg-primary-800 hover:bg-primary-700 text-white",
//     to: "/info",
//   },
// };

// const ctaBody: string = `Running an award-winning robotics team takes lots of financial contribution. We appreciate all the help we can get!`;
// const cta: CallToActionProps = {
//   heading: "Support Us",
//   body: ctaBody,
//   imgSrc: "pics/slide-1.jpg",
//   button: {
//     text: "Learn more",
//     style: "bg-white hover:bg-gray-300 text-black",
//     to: "/info",
//   },
//   carouselProps: { slides: SLIDES },
// };

// TODO: mobile friendly

// const carouselProps: CarouselProps = { slides: SLIDES };

const Home = () => {
  // const { slides, options } = carouselProps;
  // const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })]);
  return (
    <div>
      <EmblaCarousel slides={SLIDES} />
      <div className="bg-emerald-950">
        <div className="p-24 top-div bg-background">
          <div>
            <div className="flex flex-col gap-2 text-white max-w-[72rem] mx-auto lg:mb-24 mb-6">
              <h1 className="text-center lg:text-5xl text-3xl font-bold">
                About Us
              </h1>
              <p className="text-center lg:text-2xl text-lg leading-tight">
                Team 1257 Parallel Universe is an out of this world FIRST
                robotics team based in Scotch Plains, NJ! We strive to inspire
                and cultivate a passion for STEM in a new generation of future
                innovators, leaders, and entrepreneurs.
              </p>
            </div>
            <div className="hidden lg:flex flex-row justify-center max-w-[72rem] mx-auto mb-24">
              <BlobText
                statistic="2004"
                description="Founded"
                gradientL="#8c43fa"
                gradientR="#c92eeb"
              />
              <BlobText
                statistic="20+"
                description="Awards"
                gradientL="#8c43fa"
                gradientR="#c92eeb"
                invert
              />
              <BlobText
                statistic="100+"
                description="Members"
                gradientL="#8c43fa"
                gradientR="#c92eeb"
              />
            </div>
            <div className="flex flex-col items-center">
              <Button
                text="Learn more"
                style="bg-green-700 hover:bg-green-500 text-white blob-green"
                to="/info"
              />
            </div>
          </div>
        </div>
        <div className="bottom-div top-invert bg-white p-36">
          <div className="lg:grid lg:grid-cols-2 flex flex-col gap-4 lg:gap-10 text-black items-center lg:max-w-[72rem] m-auto">
            <p className="lg:text-xl text-md">
              FIRST is an international, not-for-profit organization that was
              founded in 1989 in Manchester, NH. FIRST had goals to inspire
              younger people to become interested in STEM. The organization
              currently has four programs that support their goal.
            </p>
            <img
              src={"pics/frcLogo.png"}
              alt="FRC logo"
              className="hidden lg:block"
            />
            <img
              src={"pics/frc/FIRST_just_logo.png"}
              alt="FRC logo"
              className="lg:hidden block"
            />
          </div>
        </div>
        <div className="bottom-invert top-arrow p-24 bg-background">
          <div>
            <div className="flex flex-col gap-2 text-white max-w-[72rem] mx-auto mb-12">
              <h1 className="text-center lg:text-5xl text-3xl font-bold">
                Our Impact
              </h1>
              <p className="text-center lg:text-2xl text-lg leading-tight">
                Parallel Universe is deeply committed to STEM outreach and
                education. Team 1257 is a proud co-host of RVSTS, and its
                members often volunteer at FLL events.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <iframe
                src="https://www.youtube.com/embed/3crFpGlAGOU?si=SC3A5RL_Z2zJeFIT"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mb-12 lg:w-[640px] lg:h-[360px] w-full"
              ></iframe>
              <Button
                text="Learn more"
                style="bg-green-700 hover:bg-green-500 text-white blob-green"
                to="/outreach"
              />
            </div>
          </div>
        </div>
        <div className="bottom-arrow bg-gradient-to-r p-16 from-purple-600 from-50% to-blue-400 ">
          <div>
            <div className="flex flex-col gap-2 text-white max-w-[72rem] mx-auto mb-12">
              <h1 className="text-center lg:text-5xl text-3xl font-bold">
                Get Involved
              </h1>
              <p className="text-center lg:text-2xl text-lg leading-tight">
                Running an award-winning robotics team takes significant
                personal and financial contribution. We are always seeking new
                mentors and sponsorships. We appreciate all the help we can get!
              </p>
            </div>
            <div className="flex flex-col items-center max-w-[72rem] m-auto">
              {/* <div className="emblaCTA mb-12">
                <div className="embla__viewport" ref={emblaRef}>
                  <div className="embla__container">
                    {slides.map((index) => (
                      <div className="embla__slide" key={index}>
                        <div className="embla__slide__number">
                          <span>{index + 1}</span>
                        </div>
                        <img
                          className="embla__slide__img"
                          src={imageByIndex(index)}
                          alt="Your alt text"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
              <Button
                text="Learn more"
                style="bg-white text-black"
                to="/support"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
