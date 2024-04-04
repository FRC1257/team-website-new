import Masonry from "@mui/lab/Masonry";

const imgs = Object.values(
  import.meta.glob(
    "../../components/images/outreach/robocon/*.{png,jpg,jpeg,PNG,JPEG}",
    {
      eager: true,
      as: "url",
    }
  )
);

const body1: string = `Our largest engineering inspiration event in scale is the Raritan Valley Science and Technology Showcase, which was founded in September 2022. We co-host RVSTS at the Bridgewater Commons Mall, where we are able to engage tens of thousands of students. We use clicker counters to count that we have engaged approximately 21,280 attendees over the past two years, and reached over 100,000 mall visitors. We track RVSTS’s public engagement through data collected by volunteers and by the mall dwell time which increased by 15 minutes during RVSTS. RVSTS truly emphasizes the FIRST value of cooperation. During the event, we host 24 FRC teams, 14 FLL teams, and 29 FTC teams, totaling 67 teams. The event is also cohosted by Team 1257, 56, 41, 75, 102, and 9116.
RVSTS hosted many different outreach rooms, including the FIRST Lego League room, Robot Driving, FIRST Tech Challenge room and competition, STEAM Station, and Investigation Alley. The FIRST Lego League room had three FLL game tables at which event volunteers showed kids how robots interact with their environments. Kids learned how mini-robots as they accomplished their tasks, while also learning how the mechanisms themselves worked. The robot driving room housed a drive field with two full-sized robots. Sectioned off in an adjacent room, were three FRC-sized fields available for the public to drive robots on. Next door to the robot driving room, was a bustling FTC room with game fields containing several different years’ games, robot displays, robot driving stations, and a mini FTC competition. Additionally, the investigation alley hosted dozens of STEM vendors and booths from STEM organizations across New Jersey. At these booths, kids could fly drones, race robots, and join local STEM opportunities. Throughout the weekend, we also had science magic shows and opportunities for kids to interact with Spot the robot dog from Boston Dynamics.`;

const body2: string = `Team 1257 plays a big role in running RVSTS. Our members serve as both official event volunteers and also participants in the robot showcase. During the spring, many of our senior members join RVSTS planning committees and make preparations for the following seasons. Our team heads the marketing and the college outreach committees. In the marketing committee, we advertise the event, creating flyers and posters, and create over 60 custom signs for the Bridgewater Commons Mall. We are also in charge of reaching out and securing local colleges to set up booths at RVSTS, where college representatives can speak to high schoolers about pursuing STEM and about scholarship opportunities. Our official event volunteers were excused from school to set up RVSTS and worked all weekend long to help make the event run smoothly.
In addition to tracking the number of people engaged, we also track our impact through more qualitative metrics. We interview students, volunteers, and organizers to see the impact made and learn how we can improve for next year. Attendees from FIRST education said about RVSTS, “It was spectacular and I was amazed around every corner seeing people so excited about STEM! I talked to so many great students and parents and mentors and hearing them share their passions was inspiring.” A returning attendee with two kids said RVSTS had improved since last year, was more engaging, had more activities, and was more geared towards the kid target audience. We’ve grown RVSTS year on year and 1257 will continue to grow the event to spread stem to thousands more students. For next year, we are rebranding to RoboCon, which reflects our mission to take RVSTS beyond Raritan Valley. We plan to expand the event to offer more activities in the mall, to host the event over multiple weekends across the year, and advertise the event to attract students from across the tri-state area.`;

const body3: string = `In addition to our STEM impact, through RVSTS, we also had a positive impact on local businesses. 73% of Bridgewater Commons tenants reported that the RVSTS had a direct positive impact on sales. The stores were, on average, 15% over sales projections and had 10-15% more traffic. During the event, Macy’s sold out their Lego Robot Line and Lego, despite being unable to disclose sales, said they “were VERY happy with sales [that] weekend.” Don’t just take our word for it. At the event, we met and interviewed a boy named Logan about his experience at RVSTS. He said his favorite part was the FRC robotics showcase, which he said inspired him to join robotics in the future. After being inspired by an amazing day at RVSTS, he made a video about it. Watch his video by scanning the QR code below.`;

const Robocon = () => {
  return (
    <div>
      <div className="p-24 bg-gradient-to-r from-blue-500 to-fuchsia-800">
        <h1 className="text-center text-white lg:text-5xl text-3xl font-bold mb-8">
          Robocon (formerly RVSTS)
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
          <p className="text-lg flex flex-wrap text-center leading-relaxed text-white">
            {body3}
          </p>
          <iframe
            src="https://www.youtube.com/embed/YyXAa36LolA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mb-12 lg:w-[640px] lg:h-[360px] w-full mx-auto"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Robocon;
