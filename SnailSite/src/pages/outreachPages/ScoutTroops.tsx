import Masonry from "@mui/lab/Masonry";
import scout1 from "../../components/images/outreach/scout1.png";
import scout2 from "../../components/images/outreach/scout2.png";
import scout3 from "../../components/images/outreach/scout3.png";

const body: string =
  "Team 1257 also routinely hosts girl and boy scout troops. We invite scout troops to visit our team and inspire them to pursue STEM. We run team-building activities, including building bridges out of marshmallows and spaghetti, building pencil towers, and building spoon catapults. Scout troops then visit our robotics subteams to learn about robot construction, learn about interesting real-life applications of code, and create arts and crafts with our operations teams. After their visit, we guide interested scouts with joining local STEM opportunities. We help many interested students in building FLL robots for local science fairs.";

const ScoutTroops = () => {
  return (
    <div>
      <div className="p-24 bg-gradient-to-r from-blue-500 to-fuchsia-800">
        <h1 className="text-center text-white lg:text-5xl text-3xl font-bold mb-8">
          Scout Troops
        </h1>
      </div>
      <div className="lg:p-24 p-12 bg-background">
        <div className="flex flex-col max-w-[96rem] mx-auto gap-10">
          <p className="text-xl flex flex-wrap leading-relaxed text-white">
            {body}
          </p>
          <Masonry columns={3}>
            <img
              // srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={scout1}
              alt={"stuff"}
              loading="lazy"
              className="block w-full rounded-lg"
            />
            <img
              // srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={scout2}
              alt={"stuff"}
              loading="lazy"
              className="block w-full rounded-lg"
            />
            <img
              // srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={scout3}
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

export default ScoutTroops;
