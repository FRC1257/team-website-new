import Button, { ButtonProps } from "./Button";

export interface CTAProps {
  textLeft?: boolean;
  heading: string;
  body: string;
  button: ButtonProps;
  imgSrc: string;
}

// jank way to add padding to grid
// https://stackoverflow.com/a/10048839
// https://www.w3schools.com/css/css_border_color.asp
const CTA = ({ textLeft, heading, body, imgSrc, button }: CTAProps) => {
  return (
    <div className="bg-purple-200 px-24 py-12">
      <div className="grid grid-cols-2 gap-20 bg-green-300 border-[50px] border-green-300">
        <div className={`bg-red-300 ${textLeft ? "order-1" : ""}`}>
          <img className="h-[40dvh] w-full" src={imgSrc} alt="myimg" />
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

export default CTA;
