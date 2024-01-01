import Button, { ButtonProps } from "./Button";

export interface SectionProps {
  textLeft?: boolean;
  heading: string;
  body: string;
  button: ButtonProps;
  imgSrc: string;
}

const Section = ({ textLeft, heading, body, imgSrc, button }: SectionProps) => {
  return (
    <div className="grid grid-cols-2 gap-20 bg-green-300 px-24 py-12">
      <div className={`bg-red-300 ${textLeft ? "order-1" : ""}`}>
        <img className="h-[50dvh] w-full" src={imgSrc} alt="myimg" />
      </div>
      <div className="bg-blue-300">
        <div className="text-6xl mb-10">{heading}</div>
        <div className="text-2xl flex flex-wrap leading-relaxed mb-10">
          {body}
        </div>
        <Button text={button.text} style={button.style} to={button.to} />
      </div>
    </div>
  );
};

export default Section;
