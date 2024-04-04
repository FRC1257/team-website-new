import Masonry from "@mui/lab/Masonry";

const imgs = Object.values(
  import.meta.glob(
    "../../components/images/outreach/menlo/*.{png,jpg,jpeg,PNG,JPEG}",
    {
      eager: true,
      as: "url",
    }
  )
);

const body1: string = `Team 1257 co-hosts a FIRST Lego League competition each year at the Menlo Park Mall. The FLL season is quite short and teams only have one chance to qualify for states, meaning that FLL students lack any other platform to showcase all the hard work they put into their robot and innovation project. Menlo Mashup provides FLL teams across central and north New Jersey an incredible offseason opportunity for teams to continue developing their robots, learn, and have fun. The event was founded in 2023 as a joint event between team 1257 and team 7587, Metuchen Momentum.
Menlo Mashup is a purposely open, rather than invitational, FLL competition, meaning that we include and welcome all teams. Last year, we hosted the event for 11 FLL teams. This year, we have greatly expanded the event to welcome 24 teams.`;

const body2: string = `At the event, teams compete with the FLL competition from the previous fall. We had two competition sets, including four fields across two tables. This year, we are growing the event to three competition sets. In the future, we plan to add STEM outreach and exhibits, particularly to introduce other FIRST programs like FTC and FRC. Currently, teams record a video of the innovation projects which our judges watch in advance. In the future, we plan to expand the event in the Menlo Park Mall so that the innovation projects can be displayed to the public.
The purpose of this event is to inspire STEM curiosity in children of all ages, from 3rd grade to 8th grade. By hosting the event in the Menlo Park Mall, we also reach tens of thousands of members of the public. In addition to the FLL competition fields, we reach the public by setting up booths and displays of teams’ innovation projects. 
Specifically, team 1257 role in the event is to set up,  help teams with robot programming issues, judge the event, conduct pit interviews, referee matches, queue all the matches, and to guide teams from the pits through the mall alleys to the FLL fields. We also connect with members of the public, and speak with them about the event and how they can join FIRST.`;

const MenloMashup = () => {
  return (
    <div>
      <div className="p-24 bg-gradient-to-r from-blue-500 to-fuchsia-800">
        <h1 className="text-center text-white lg:text-5xl text-3xl font-bold mb-8">
          Menlo Mashup
        </h1>
      </div>
      <div className="lg:p-24 p-12 bg-background">
        <div className="flex flex-col max-w-[96rem] mx-auto gap-10">
          <p className="text-lg flex flex-wrap leading-relaxed text-white">
            {body1}
          </p>
          <p className="text-lg flex flex-wrap leading-relaxed text-white">
            {body2}
          </p>
          <Masonry columns={2}>
            {imgs.map((img, index) => (
              <div key={index}>
                <img
                  src={`${img}`}
                  alt={`${index}`}
                  loading="lazy"
                  className="block w-full rounded-lg"
                />
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default MenloMashup;
