import Button from "./Button";
import { CarouselProps } from "./EmblaCarousel";
import { SectionProps } from "./Section";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import imageByIndex from "./imageByIndex";

export interface CallToActionProps extends SectionProps {
  carouselProps: CarouselProps;
}

// jank way to add padding to grid
// https://stackoverflow.com/a/10048839
// https://www.w3schools.com/css/css_border_color.asp
const CallToAction = ({
  textLeft,
  heading,
  body,
  button,
  carouselProps,
}: CallToActionProps) => {
  const { slides, options } = carouselProps;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })]);

  return (
    <div className="bg-purple-200 px-24 py-12">
      <div className="grid grid-cols-2 gap-20 bg-green-300 border-[50px] border-green-300">
        <div className={`bg-red-300 ${textLeft ? "order-1" : ""}`}>
          <div className="embla">
            <div className="embla__viewport h-[480px]" ref={emblaRef}>
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
        </div>
        <div className="bg-blue-300">
          <div className="text-7xl mb-10">{heading}</div>
          <div className="text-4xl flex flex-wrap leading-relaxed mb-10">
            {body}
          </div>
          <Button text={button.text} style={button.style} to={button.to} />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
