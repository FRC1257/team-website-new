// import robocon from "../../public/pics/rvsts.jpg";
// import hydrocar from "../../public/pics/hydrocar.png";
// import cubscouts from "../../public/pics/cubscouts.png";
import Card from "../components/Card";

const Outreach = () => {
  return (
    <div>
      <div className="p-24 bg-gradient-to-r from-blue-500 to-fuchsia-800">
        <h1 className="text-center text-white lg:text-5xl text-3xl font-bold mb-8">
          Outreach Initiatives
        </h1>
      </div>
      <div className="lg:p-24 p-12 bg-background">
        <div className="flex flex-row">
          <Card title="School" imgSrc="" to="/outreach/school" />
          <Card title="Local" imgSrc="" to="/outreach/local" />
          <Card title="Mid-Atlantic" imgSrc="" to="/outreach/mar" />
          <Card title="Broader FIRST" imgSrc="" to="/outreach/first" />
        </div>
        <Card
          title="EI Binder"
          imgSrc=""
          to="https://docs.google.com/document/d/16ZE6Q27uvLLucIPhw8atTV8u9sLjDauHQOuY5sDXqc8/edit?usp=sharing"
          external
        />
      </div>
    </div>
  );
};

export default Outreach;
