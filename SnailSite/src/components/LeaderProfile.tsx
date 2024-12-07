interface LeaderProfileProps {
  name: string;
  position?: string;
  image: string;
}

export type LeaderProfilePropsList = LeaderProfileProps[];

const LeaderProfile = ({ name, position, image }: LeaderProfileProps) => {
  return (
    <div className="text-white text-center lg:mb-0 mb-5">
      <img
        className="object-contain 2xl:h-64 2xl:w-64 w-32 h-32 rounded-full justify-self-center mb-2"
        src={image}
        alt={name}
      />
      <h2 className="font-bold lg:text-2xl text-lg">{name}</h2>
      <p className="lg:text-lg">{position}</p>
    </div>
  );
};

export default LeaderProfile;
