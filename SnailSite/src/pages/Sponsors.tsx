import tshirt from "../../public/pics/tshirt.png";

const Sponsors = () => {
  return (
    <div className="bg-background p-10">
      <h1 className="text-5xl font-bold mb-12 text-white text-center">
        Thank you to our 2023-2024 Sponsors!
      </h1>
      <img
        src={tshirt}
        alt="placeholder"
        className="mx-auto my-12 w-[1750px] h-[2000px]"
      />
    </div>
  );
};

export default Sponsors;
