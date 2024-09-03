import BlobText from "../components/BlobText";
import Button from "../components/Button";
import EmblaCarousel from "../components/EmblaCarousel";
import { carouselLen } from "../components/imageByIndex";
import "../embla.css";

import "./Home.css";

const SLIDE_COUNT = carouselLen + 1;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Home = () => {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} />
      <div className="bg-emerald-950">
        <div className="lg:p-24 p-12 top-div bg-background">
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
                styleId={1}
              />
              <BlobText
                statistic="20+"
                description="Awards"
                gradientL="#8c43fa"
                gradientR="#c92eeb"
                styleId={2}
              />
              <BlobText
                statistic="100+"
                description="Members"
                gradientL="#8c43fa"
                gradientR="#c92eeb"
                styleId={3}
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
        <div className="bottom-div top-invert bg-white lg:p-36 p-20">
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
        <div className="bottom-invert top-arrow lg:p-24 p-12 bg-background">
          <div>
            <div className="flex flex-col gap-2 text-white max-w-[72rem] mx-auto mb-12">
              <h1 className="text-center lg:text-5xl text-3xl font-bold">
                Our Impact
              </h1>
              <p className="text-center lg:text-2xl text-lg leading-tight">
                Parallel Universe is deeply committed to STEM outreach and
                education. Team 1257 is a proud co-host of Robocon, and its
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
