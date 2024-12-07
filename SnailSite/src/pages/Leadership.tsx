import { ReactElement } from "react";
import LeaderProfile from "../components/LeaderProfile";
import leadership from "./leadershipProfiles";

// should refactor
// e.g., with `flex-row` parent and `w-1/5` children somehow
const rows: ReactElement[] = [];
for (let i = 0; i < 4; i++) {
  rows.push(
    <div className="flex lg:flex-row flex-col items-center lg:items-start justify-around lg:mb-8 mb-0">
      {leadership.slice(0 + i * 5, 5 + i * 5).map((leader) => (
        <LeaderProfile
          name={leader.name}
          position={leader.position}
          image={leader.image}
          key={leader.name}
        />
      ))}
    </div>
  );
}

const Leadership: React.FC = () => {
  return (
    <div className="lg:p-24 p-12 bg-black">
      <div className="mx-auto max-w-[96rem]">
        <h1 className="lg:text-4xl text-2xl text-white font-bold mx-auto text-center mb-8">
          Student Leadership
        </h1>
        <div className="flex flex-col">{rows.map((row) => row)}</div>
        <h1 className="lg:text-4xl text-2xl text-white font-bold mx-auto text-center mb-8">
          Advisors
        </h1>
        <div className="flex flex-row justify-center lg:gap-10 gap-6 lg:mb-8">
          <LeaderProfile
            name={"Michele Cook"}
            image={"https://placehold.co/600x600"}
          />
          <LeaderProfile
            name={"Michael Tollin"}
            image={"https://placehold.co/600x600"}
          />
        </div>
      </div>
    </div>
  );
};

export default Leadership;
