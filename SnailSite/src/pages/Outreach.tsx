import robocon from "../../public/pics/rvsts.jpg";
import hydrocar from "../../public/pics/hydrocar.png";
import cubscouts from "../../public/pics/cubscouts.png";

const Outreach = () => {
  return (
    <div className="lg:p-24 p-12 bg-background">
      <div className="flex flex-col gap-2 text-white max-w-[72rem] mx-auto mb-12">
        <h1 className="text-center lg:text-5xl text-3xl font-bold mb-8">
          Our Outreach
        </h1>
        <h2 className="text-center lg:text-4xl text-2xl font-bold mb-4">
          Robocon (RVSTS)
        </h2>
        <div className="text-center flex flex-col gap-4 lg:text-xl text-md leading-tight">
          <p className="">
            In the past 1-2 years, we have made great strides positioning
            ourselves to better serve our community. In September 2022, we
            co-founded and co-hosted the Raritan Valley Science and Technology
            Showcase at the Bridgewater Commons Mall. Before the event, many
            1257 served on RVSTS committees and spent countless hours in
            meetings throughout the winter, spring, and summer of 2023. 1257
            team members did everything from creating 60 custom mall signs,
            serving as official event volunteers, helping organize event
            finances, and planning outreach room activities. In terms of FIRST
            robotics teams participating, we hosted 14 FLL teams, 29 FTC teams
            (152 students), and 24 FRC teams.
          </p>
          <p className="hidden lg:block">
            RVSTS hosted many different outreach rooms, including the FIRST Lego
            League room, Robot Driving, FIRST Tech Challenge room and
            competition, STEAM Station, and Investigation Alley. The FIRST Lego
            League room had three FLL game tables at which event volunteers
            showed kids how robots interact with their environments. Kids
            learned how mini-robots as they accomplished their tasks, while also
            learning how the mechanisms themselves worked. The robot driving
            room housed a drive field with two full-sized robots. Sectioned off
            in an adjacent room, were three FRC-sized fields available for the
            public to drive robots on. Next door to the robot driving room, was
            a bustling FTC room with game fields containing several different
            years' games, robot displays, robot driving stations, and a mini FTC
            competition. Additionally, the investigation alley hosted dozens of
            STEM vendors and booths from STEM organizations across New Jersey.
            At these booths, kids could fly drones, race robots, and join local
            STEM opportunities. In addition to our STEM impact, through RVSTS,
            we also had a positive impact on local businesses. 73% of
            Bridgewater Commons tenants reported that the RVSTS had a direct
            positive impact on sales. The stores went, on average, 15% over
            sales projections and had 10-15% more traffic. During the event,
            Macy's sold out their Lego Robot Line and Lego, despite being unable
            to disclose sales, said they "were VERY happy with sales [that]
            weekend."
          </p>
          <p className="hidden lg:block">
            We also track the impact of RVSTS through more qualitative metrics.
            During each of our impact events, we interview students, volunteers,
            and organizers to see the impact made and learn how we can improve
            for next year. Attendees from FIRST education said about RVSTS, “It
            was spectacular and I was amazed around every corner seeing people
            so excited about STEM! I talked to so many great students and
            parents and mentors and hearing them share their passions was
            inspiring.” A returning attendee with two kids said RVSTS had
            improved since last year, was more engaging, had more activities,
            and was more geared towards the kid target audience. We've grown
            RVSTS year on year and 1257 will continue to grow the event to
            spread stem to thousands more students. Overall, attendee feedback
            has been critical in improving our events on our mission of getting
            more students involved in FIRST.
          </p>
          <img
            src={robocon}
            alt="placeholder"
            width={720}
            height={360}
            className="mx-auto my-12"
          />
          <h2 className="text-center lg:text-4xl text-2xl font-bold mb-4">
            Hydrocar Challenge
          </h2>
          <div className="text-center flex flex-col gap-4 lg:text-xl text-md leading-tight">
            In fall of 2023, we founded and ran the inaugural HydroCar
            Engineering Competition, available to students in our school
            district. The Hydrogen Car Challenge brings together high school
            students from across New Jersey to build race vehicles powered by
            hydrogen fuel cells. The vehicles are judged on speed,
            craftsmanship, engineering, sustainability, and documentation. We
            acquired approximately 3,000 dollars worth fuel cells, electronics,
            and parts, then assembled kits for the teams. In our inaugural race,
            26 high schoolers from four different high schools competed in teams
            to race their vehicles down a track that team 1257 built.
          </div>
          <img
            src={hydrocar}
            alt="placeholder"
            className="mx-auto my-12 w-[720px] h-[360px]"
          />
          <h2 className="text-center lg:text-4xl text-2xl font-bold mb-4">
            Cub Scout Visits
          </h2>
          <div className="text-center flex flex-col gap-4 lg:text-xl text-md leading-tight mb-6">
            Team 1257 also hosts girl and boy scout troops to inspire them to
            pursue STEM. Visiting scout troops bonder over team-build
            activities, visit robotics subteams to learn about robot
            construction and cool uses of code, and create arts and crafts with
            our operations teams. After their visit, we help the scouts and
            their leaders to start FLL teams.
          </div>
          <img
            src={cubscouts}
            alt="placeholder"
            className="mx-auto my-12 w-[720px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Outreach;
