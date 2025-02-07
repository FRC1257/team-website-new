import friends from "./sponsorFriendTier";

const Sponsors = () => {
  return (
    <div className="bg-black p-10">
      <h1 className="text-white text-3xl font-bold text-center mb-2">Gold Sponsors</h1>
      <hr />

      <h2 className="text-white font-bold italic text-center text-3xl m-24">Coming Soon...</h2>

      <h1 className="text-white text-3xl font-bold text-center mb-2">Silver Sponsors</h1>
      <hr />

      <h2 className="text-white font-bold italic text-center text-3xl m-24">Coming Soon...</h2>

      <h1 className="text-white text-3xl font-bold text-center mb-2">Bronze Sponsors</h1>
      <hr />

      <h2 className="text-white font-bold italic text-center text-3xl m-24">Coming Soon...</h2>

      <h1 className="text-white text-3xl font-bold text-center mb-2">Friends</h1>
      <hr />
      <div className="mt-2 mx-auto max-w-[72rem]">
        <ul className="flex flex-col max-h-[30rem] flex-wrap gap-2">
          {friends.map((friend) => (
            <li className="text-white text-center" key={friend}>{friend}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sponsors;
