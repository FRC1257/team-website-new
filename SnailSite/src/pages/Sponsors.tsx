import friends from "./sponsorFriendTier";
import sponsorsBronze from "./sponsorsBronze";
import sponsorsSilver from "./sponsorsSilver";
import gold from "../assets/sponsors/gold/Handsome Energy Systems INC.png";
import plat from "../assets/sponsors/platinum/Picatinny STEM.png";

// refactor sponsorships into object with interface
// using 18rem since max-w-[72rem] so 72/4 = 18
// but factor in gap-5 aka 1.25rem so about 16 is good
const BRONZE_SIZE: string = "w-[16rem] h-auto";
const SILVER_SIZE: string = "w-[22rem] h-auto";

const Sponsors = () => {
  return (
    <div className="bg-black p-10">
      <h1 className="text-white text-3xl font-bold text-center mb-2">Platinum Sponsors</h1>
      <hr className="mb-5" />
      <img src={plat} alt="" className="w-[32rem] h-auto mx-auto mb-5" />

      <h1 className="text-white text-3xl font-bold text-center mb-2">Gold Sponsors</h1>
      <hr className="mb-5" />
      <img src={gold} alt="" className="w-[32rem] h-auto mx-auto bg-white mb-5" />

      <h1 className="text-white text-3xl font-bold text-center mb-2">Silver Sponsors</h1>
      <hr className="mb-5" />
      <div className="flex flex-row max-w-[72rem] flex-wrap justify-center mx-auto mb-5 gap-5">
        <img src={sponsorsSilver[0]} alt="" className={SILVER_SIZE} />
        <img src={sponsorsSilver[1]} alt="" className={SILVER_SIZE} />
        <img src={sponsorsSilver[2]} alt="" className={SILVER_SIZE} />
      </div>

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
      <hr className="mb-5" />
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
