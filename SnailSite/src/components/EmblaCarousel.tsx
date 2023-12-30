import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import imageByIndex from "./imageByIndex";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

// goofy carousel
// https://www.embla-carousel.com/examples/predefined/#autoplay
// https://www.embla-carousel.com/api/plugins/#constructor-options
// https://www.embla-carousel.com/plugins/autoplay/
const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 2000 })]);

  return (
    <div className="relative embla">
      <div className="absolute left-10 top-52 z-50 text-white flex flex-col items-start w-1/3 gap-4">
        <h1 className="text-6xl font-bold">UCVTS FRC Robotics Team 1257</h1>
        <h2 className="text-4xl font-semibold">
          We are the coolest FRC Robotics Team in New Jersey.
        </h2>
        <button className="bg-green-800 hover:bg-green-700 rounded-xl py-4 px-6 font-bold text-lg mt-4">Learn more</button>
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
