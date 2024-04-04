import Masonry from "@mui/lab/Masonry";

const body1: string = `In fall of 2023, we founded and ran the inaugural HydroCar Engineering Competition. 
The Hydrogen Car Challenge brings together high school students to learn about sustainable power generation and to 
build hydrogen-powered race vehicles. The vehicles are judged on speed, craftsmanship, engineering, sustainability, 
and documentation. For the competition, students compete in teams of 4-6 students. This past year, we had teams from 
five different high schools compete, and we are currently planning to expand the competition to an additional ten high 
schools across New Jersey next year. The Hydrogen Car Challenge begins in early November and lasts for two months. 
For these two months, Team 1257 teaches a 1-hour lesson per week on sustainable energy and its applications. 
We also host supervised build sessions for four hours per week at our Makerspace. afterschool to all HydroCar teams 
for four hours per week of supervised build time afterschool. Team 1257 had four appointed HydroCar mentors who supervised 
the Makerspace, trained teams in Makerspace safety, taught teams how to use and maintain hydrogen fuel cells, and helped teams 
design and fabricate their vehicles. Team 1257 acquired approximately 3,000 dollars worth fuel cells, electronics, and parts. 
We then assembled kits for the teams, which included two hydrogen fuel cells, assorted syringes, a motor, two axles, four sets 
of assorted wheels, wiring and electrical clips, and a battery holder. Throughout the competition, HydroCar teams could request 
additional items which team 1257 would supply.`;

const body2: string = `The competition involves two aspects: the race and the judges' pitch. 
The race is set on a track built by our team. Three vehicles race at a time, and these vehicles 
are attached to guidewires on the race track. The other component of the competition is the judges' pitch, 
which is modeled after FRC judges. Throughout the competition, teams go to the judges table. Teams make a two 
minute pitch on how their vehicle incorporates sustainability, craftsmanship, and engineering principles. 
Our judging team awards points to teams based on their pitches and their previously submitted documentation. 
At the end of the competition, once all judges points and race points have been calculated, the winning team wins $100 dollars. 
Our goal with the HydroCar challenge is to create the next generation of environmentally conscious engineers. 
Our competition goes beyond teaching the core engineering principles of prototyping, Computer-Aided-Design, and tool usage. 
We also develop soft skills in teamwork, communication, time management, and presentation through the build season and judges 
pitch. Additionally, all members of the HydroCar challenge gain a deep understanding of how green energy sources work, 
the role they play in our world, and their importance.`;

const imgs = Object.values(
  import.meta.glob(
    "../../components/images/outreach/hydrocar/*.{png,jpg,jpeg,PNG,JPEG}",
    {
      eager: true,
      as: "url",
    }
  )
);

const Hydrocar = () => {
  return (
    <div>
      <div className="p-24 bg-gradient-to-r from-blue-500 to-fuchsia-800">
        <h1 className="text-center text-white lg:text-5xl text-3xl font-bold mb-8">
          Hydrocar
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
          <Masonry columns={5}>
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

export default Hydrocar;
