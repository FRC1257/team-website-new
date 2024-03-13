import tshirt from "../../public/pics/tshirt.png";

const Sponsors = () => {
  return (
    <div className="bg-background p-10">
      <h1 className="lg:text-5xl text-3xl font-bold mb-12 text-white text-center">
        Thank you to our 2023-2024 Sponsors!
      </h1>
      <img
        src={tshirt}
        alt="placeholder"
        className="mx-auto my-12 w-[70dvw] h-[80dvh]"
      />
    </div>
  );
};

export default Sponsors;
