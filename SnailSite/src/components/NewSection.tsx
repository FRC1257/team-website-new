import BlobText from "./BlobText";
import Button from "./Button";

const NewSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 text-white max-w-[72rem] mx-auto mb-24">
        <h1 className="text-center text-5xl font-bold">About Us</h1>
        <p className="text-center text-2xl leading-tight">
          Team 1257 Parallel Universe is an out of this world FIRST robotics
          team! We strive to inspire and cultivate a passion for STEM in a new
          generation of future innovators, leaders, and entrepreneurs.
        </p>
      </div>
      <div className="flex flex-row justify-center max-w-[72rem] mx-auto mb-24">
        <BlobText
          statistic="2004"
          description="Founded"
          gradientL="#8c43fa"
          gradientR="#c92eeb"
        />
        <BlobText
          statistic="20+"
          description="Awards"
          gradientL="#8c43fa"
          gradientR="#c92eeb"
          invert
        />
        <BlobText
          statistic="100+"
          description="Members"
          gradientL="#8c43fa"
          gradientR="#c92eeb"
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
  );
};

export default NewSection;
