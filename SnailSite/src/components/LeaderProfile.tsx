interface LeaderProfileProps {
  name: string;
  position?: string;
  schoolgrade?: string;
  image: string;
  fontsize?: string;
}

export type LeaderProfilePropsList = LeaderProfileProps[];

import "./LeaderProfile.css";

const LeaderProfile = ({
  name,
  position,
  schoolgrade,
  image,
  fontsize,
}: LeaderProfileProps) => {
  let size = "lg:text-2xl text-lg";
  console.log(fontsize);
  if (fontsize) size = fontsize;

  return (
    <div className="text-white text-center">
        <img
          className="justify-self-center mb-4 circlecrop"
          src={image}
          alt={name}
        />
      <h2 className={`font-bold ${size} mb-2`}>{name}</h2>
      <p className="lg:text-xl">{position}</p>
      <p>{schoolgrade}</p>
    </div>
  );
};

export default LeaderProfile;
