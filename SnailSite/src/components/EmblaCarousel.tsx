import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import imageByIndex from "./imageByIndex";

import { Link } from "react-router-dom";

export interface CarouselProps {
  slides: number[];
  options?: EmblaOptionsType;
}

// goofy carousel
// https://www.embla-carousel.com/examples/predefined/#autoplay
// https://www.embla-carousel.com/api/plugins/#constructor-options
// https://www.embla-carousel.com/plugins/autoplay/
const EmblaCarousel: React.FC<CarouselProps> = ({
  slides,
  options,
}: CarouselProps) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 4000 })]);

  return (
    <div className="relative embla">
      <div className="absolute left-10 top-[20dvh] z-10 text-white flex flex-col items-start md:w-1/2 w-2/3 gap-[1dvh]">
        <h1 className="lg:text-[3dvw] md:text-4xl text-2xl font-bold">
          UCVTS FRC Robotics Team 1257
        </h1>
        <h2 className="lg:text-[2.25dvw] md:text-2xl text-lg leading-none">
          Promoting creativity, confidence, and leadership in STEM and business.
        </h2>
        <Link to="/info">
          <button className="bg-primary-800 hover:bg-primary-700 rounded-xl py-4 lg:px-6 px-4 font-bold lg:text-lg text-md mt-4">
            Learn more
          </button>
        </Link>
      </div>
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
    </div>
  );
};

export default EmblaCarousel;
