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
    <div className="bg-background lg:px-24 lg:py-12 px-6 py-6 text-white">
      <div className="grid lg:grid-cols-2 lg:gap-10 gap-5 rounded-3xl bg-gradient-to-r p-16 from-purple-600 from-50% to-blue-400 border-purple-600">
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
        <div className="text-center lg:text-left">
          <div className="lg:text-7xl text-6xl lg:mb-10 mb-4 font-semibold">{heading}</div>
          <div className="lg:text-3xl text-2xl flex flex-wrap leading-relaxed lg:mb-10 mb-4">
            {body}
          </div>
          <Button text={button.text} style={button.style} to={button.to} />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
