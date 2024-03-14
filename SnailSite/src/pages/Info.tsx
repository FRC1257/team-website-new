// TODO: downsize image quality

import img from "../../public/pics/info.jpeg";

const Info = () => {
  return (
    <div className="lg:p-24 p-12 bg-background">
      <div className="flex flex-col gap-2 text-white max-w-[72rem] mx-auto lg:mb-12 mb-4">
        <h1 className="text-center lg:text-5xl text-3xl font-bold mb-4">
          OUR TEAM
        </h1>
        <p className="text-center lg:text-2xl text-md leading-tight mb-2">
          Our team is based in Union County Magnet High School which has a 100%
          graduation rate, with approximately 80% of students majoring in
          engineering or computer science. Team 1257 is a focal point of
          collaboration for Union County. Our team is composed of 100 members
          from 5 high schools and 21 towns. Through our mandatory business and
          sponsorship program, we teach the soft skills that are necessary for
          global change-makers and emphasize the FIRST principle of building
          people, not robots.
        </p>
        <p className="text-center lg:text-2xl text-md leading-tight mb-4">
          Being based in a magnet school district, many of our members have
          already acquired robotics knowledge in their school's specialized
          curriculum. Our reach across many towns allows us to attract more
          local business sponsors and patrons.
        </p>
      </div>
      <img
        src={img}
        alt="placeholder"
        width={1200}
        height={720}
        className="mx-auto mb-12 rounded-md"
      />
    </div>
  );
};

export default Info;
