// import Button, { ButtonProps } from "./Button";
export interface SectionProps {
  textLeft?: boolean;
  body: string;
  imgSrc?: string;
}

const Section = ({ textLeft, body, imgSrc }: SectionProps) => {
  return (
    <div className="flex flex-row gap-10 bg-red-300">
      <div className={`${textLeft ? "lg:order-1" : ""}`}>
        <img
          className="lg:block hidden w-full h-auto"
          src={imgSrc}
          alt="myimg"
        />
      </div>
      <div className="">
        <div className="text-lg flex flex-wrap leading-relaxed mb-[2dvh] text-white">
          {body}
        </div>
      </div>
    </div>
  );
};

export default Section;
