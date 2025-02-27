import friends from "./sponsorFriendTier";
import sponsorsBronze from "./sponsorsBronze";

// refactor sponsorships into object with interface
// using 18rem since max-w-[72rem] so 72/4 = 18
const BRONZE_SIZE: string = "w-[16rem] h-auto";

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

      <div className="flex flex-row max-w-[72rem] flex-wrap justify-center mx-auto mb-5 gap-5">
        <img src={sponsorsBronze[0]} alt="" className={BRONZE_SIZE} />
        <img src={sponsorsBronze[1]} alt="" className={BRONZE_SIZE} />
        <img src={sponsorsBronze[2]} alt="" className={BRONZE_SIZE} />
        <img src={sponsorsBronze[3]} alt="" className={BRONZE_SIZE} />
        <img src={sponsorsBronze[4]} alt="" className={BRONZE_SIZE} />
        <img src={sponsorsBronze[5]} alt="" className={BRONZE_SIZE + " bg-white"} />
        <img src={sponsorsBronze[6]} alt="" className={BRONZE_SIZE + " bg-white"} />
        <img src={sponsorsBronze[7]} alt="" className={BRONZE_SIZE + " bg-white"} />
        <img src={sponsorsBronze[8]} alt="" className={BRONZE_SIZE + " bg-white"} />
        <img src={sponsorsBronze[9]} alt="" className={BRONZE_SIZE + " bg-white"} />
      </div>

      <h1 className="text-white text-3xl font-bold text-center mb-2">Friends</h1>
      <hr />
      <div className="mt-2 mx-auto max-w-[96rem]">
        <ul className="flex flex-col lg:max-h-[30rem] lg:flex-wrap gap-2">
          {friends.map((friend) => (
            <li className="text-white text-center" key={friend}>{friend}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sponsors;
