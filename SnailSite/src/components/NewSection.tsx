import Button, { ButtonProps } from "./Button";

export interface SectionProps {
  textLeft?: boolean;
  heading: string;
  body: string;
  button: ButtonProps;
  imgSrc?: string;
}

const NewSection = ({ textLeft, heading, body, imgSrc, button }: SectionProps) => {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-20 gap-10 bg-background lg:px-24 lg:py-12 px-6 py-6">
      <div className={`bg-background ${textLeft ? "lg:order-1" : ""}`}>
        <div className="text-6xl text-center lg:text-left block lg:hidden font-semibold text-white">
          {heading}
        </div>
        <img
          className="lg:block hidden h-[50dvh] w-full"
          src={imgSrc}
          alt="myimg"
        />
      </div>
      <div className="bg-background">
        <div className="text-[6dvh] mb-[1dvh] hidden lg:block font-semibold text-white">
          {heading}
        </div>
        <div className="text-[3dvh] flex flex-wrap leading-relaxed mb-[2dvh] text-white">
          {body}
        </div>
        <Button text={button.text} style={button.style} to={button.to} />
      </div>
    </div>
  );
};

export default NewSection;