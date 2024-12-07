import LeaderProfile from "../components/LeaderProfile";
import leadership from "./leadershipProfiles";
import teamphoto from "../../public/pics/photo2425.jpg";
import "./leadership.css";

const Leadership: React.FC = () => {
  return (
    <div className="lg:p-24 p-12 bg-black">
      <div className="mx-auto max-w-[96rem]">
        <h1 className="lg:text-4xl text-2xl text-white font-bold mx-auto text-center mb-8">
          Student Leadership
        </h1>
        <div className="grid-layout mb-12">
          {leadership.map((leader) => (
            <LeaderProfile
              name={leader.name}
              position={leader.position}
              schoolgrade={leader.schoolgrade}
              image={leader.image}
              fontsize={leader.fontsize}
              key={leader.name}
            />
          ))}
        </div>
        <h1 className="lg:text-4xl text-2xl text-white font-bold mx-auto text-center mb-8">
          Advisors
        </h1>
        <div className="flex flex-row justify-center lg:gap-14 gap-6 lg:mb-8 max-w-[48rem] mx-auto">
          <LeaderProfile
            name={"Michele Cook"}
            image={"https://placehold.co/600x600"}
            schoolgrade={"Teacher of Social Studies, MHS"}
          />
          <LeaderProfile
            name={"Michael Tollin"}
            image={"https://placehold.co/600x600"}
            schoolgrade={"Teacher of Technology, MHS"}
          />
        </div>
        <h1 className="lg:text-4xl text-2xl text-white font-bold mx-auto text-center mt-8 mb-8">
          2024-2025 Team Photo
        </h1>
        <img src={teamphoto} alt={"team"} className="rounded-lg" />
      </div>
    </div>
  );
};

export default Leadership;
