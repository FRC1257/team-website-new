import crossteam from "../../components/images/outreach/crossteam.png";

const body1: string = `Team 1257 is committed to cross-team collaboration across the Mid-Atlantic Region. One of our closest partnerships is with Metuchen Momentum, team 7587. Throughout the build season, we visit their makerspace to host collaborative Saturday practice sessions. This year, our team helped team 7587 develop a swerve chassis. We met up over several occasions and also were constantly in communication online with their team to help them program their first swerve chassis and basic autos. We also work with Metuchen Momentum to co-host the Menlo Park Mashup, and open offseason FLL competition at the Menlo Park Mall. Additionally, we also work very closely with several FRC teams to co-host the Raritan Valley Science and Technology Showcase at the Bridgewater Commons Mall. This past fall, we worked with teams 56, 41, 75, 102, and 9116 to co-host, and also coordinated to welcome 57 other FRC, FTC, and FLL teams to join and compete at RVSTS.`;

const CrossteamColabs = () => {
  return (
    <div>
      <div className="p-24 bg-gradient-to-r from-blue-500 to-fuchsia-800">
        <h1 className="text-center text-white lg:text-5xl text-3xl font-bold mb-8">
          Partnerships with FMA Teams
        </h1>
      </div>
      <div className="lg:p-24 p-12 bg-background">
        <div className="flex flex-col max-w-[96rem] mx-auto gap-10">
          <p className="text-xl flex flex-wrap leading-relaxed text-white">
            {body1}
          </p>
          <p className="text-lg flex flex-wrap leading-relaxed text-white">
            {/* {body2} */}
          </p>
          <img
            src={crossteam}
            alt={"stuff"}
            loading="lazy"
            className="block w-[640px] rounded-lg mx-auto"
          />
          <p className="text-white text-center text-lg italic">
            Combined Saturday Practice with Team 7587 at Metuchen High School
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrossteamColabs;
