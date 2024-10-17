import { ReactElement } from "react";
import LeaderProfile from "../components/LeaderProfile";
import leadership from "./leadership";

const rows: ReactElement[] = [];
for (let i = 0; i < 4; i++) {
  rows.push(
    <div className="flex flex-row justify-around mb-8">
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

const LeadershipNew: React.FC = () => {
  return (
    <div className="lg:p-24 p-12 bg-background">
      <div className="mx-auto max-w-[96rem]">
        <h1 className="text-4xl text-white font-bold mx-auto text-center mb-8">
          Student Leadership
        </h1>
        <div className="flex flex-col">{rows.map((row) => row)}</div>
        <h1 className="text-4xl text-white font-bold mx-auto text-center mb-8">
          Advisors
        </h1>
        <div className="flex flex-row justify-center gap-10 mb-8">
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

export default LeadershipNew;
