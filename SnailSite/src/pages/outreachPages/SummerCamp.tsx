import Masonry from "@mui/lab/Masonry";
import camp1 from "../../components/images/outreach/camp1.png";
import camp2 from "../../components/images/outreach/camp2.png";

const body: string =
  "For three months over the summer, we ran a biweekly introduction to robotics summer program at the Longhill Library. Team 1257 members taught elementary and middle school students in hour-long sessions. We guided students through constructing robots with the Lego Robotics Spike Prime kits. Summer camp participants built multiple robots that incorporated different subsystems prevalent in FIRST Lego League. Our members devised weekly challenges designed to challenge and level up student skills. These challenges involved robot claws and color, touch, and distance sensors to interact with their environment. We also taught the science principles behind how robotics programming, tracking, and sensors worked. Later, we introduced students to computer science concepts such as conditionals, groups, and variables. By the end of the summer program, participants said that they were inspired and far more likely to join local robotics teams and engineering clubs. We also guide these students and their parents through joining local opportunities to pursue robotics during the school year, namely FLL. This upcoming summer, we are expanding our robotics summer program to local libraries across Union County.";

const SummerCamp = () => {
  return (
    <div>
      <div className="p-24 bg-gradient-to-r from-blue-500 to-fuchsia-800">
        <h1 className="text-center text-white lg:text-5xl text-3xl font-bold mb-8">
          Summer Camp
        </h1>
      </div>
      <div className="lg:p-24 p-12 bg-background">
        <div className="flex flex-col max-w-[96rem] mx-auto gap-10">
          <p className="text-lg flex flex-wrap leading-relaxed text-white">
            {body}
          </p>
          <Masonry columns={2}>
            <img
              // srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={camp1}
              alt={"stuff"}
              loading="lazy"
              className="block w-full rounded-lg"
            />
            <img
              // srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={camp2}
              alt={"stuff"}
              loading="lazy"
              className="block w-full rounded-lg"
            />
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default SummerCamp;
