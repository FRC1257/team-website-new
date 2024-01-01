import Button, { ButtonProps } from "./Button";

interface SectionProps {
  heading: string;
  body: string;
  button: ButtonProps;
  imgSrc: string;
}

const Section = ({ heading, body, imgSrc, button }: SectionProps) => {
  return (
    <div className="grid grid-cols-2 gap-20 bg-green-300 p-24">
      <div className="bg-red-300">
        <img className="h-[50dvh] w-full" src={imgSrc} alt="myimg" />
      </div>
      <div className="bg-blue-300">
        <div className="text-6xl mb-10">{heading}</div>
        <div className="text-2xl flex flex-wrap leading-relaxed">{body}</div>
        <Button text={button.text} style={button.style} to={button.to} />
      </div>
    </div>
  );
};

export default Section;
