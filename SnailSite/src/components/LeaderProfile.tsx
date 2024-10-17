interface LeaderProfileProps {
  name: string;
  position?: string;
  image: string;
}

export type LeaderProfilePropsList = LeaderProfileProps[];

const LeaderProfile = ({ name, position, image }: LeaderProfileProps) => {
  return (
    <div className="max-w-64 text-white text-center">
      <img
        className="object-contain lg:h-64 lg:w-64 w-24 h-24 rounded-full justify-self-center mb-2"
        src={image}
        alt={name}
      />
      <h2 className="font-bold text-2xl">{name}</h2>
      <p className="text-lg">{position}</p>
    </div>
  );
};

export default LeaderProfile;
