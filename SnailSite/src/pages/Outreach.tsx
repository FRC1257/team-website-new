import schoollogo from "../components/images/outreach/cardlogos/unioncounty.png";
import locallogo from "../components/images/outreach/cardlogos/cubscouts.jpg";
import marlogo from "../components/images/outreach/cardlogos/roboconlogo.png";
import broadfirstlogo from "../components/images/outreach/cardlogos/oa.png";
import binder from "../components/images/outreach/cardlogos/binder.png";
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
          <Card title="School" imgSrc={schoollogo} to="/outreach/school" />
          <Card title="Local" imgSrc={locallogo} to="/outreach/local" />
          <Card title="Mid-Atlantic" imgSrc={marlogo} to="/outreach/mar" />
          <Card
            title="Broader FIRST"
            imgSrc={broadfirstlogo}
            to="/outreach/first"
          />
        </div>
        <Card
          title="EI Binder"
          imgSrc={binder}
          to="https://docs.google.com/document/d/16ZE6Q27uvLLucIPhw8atTV8u9sLjDauHQOuY5sDXqc8/edit?usp=sharing"
          external
        />
      </div>
    </div>
  );
};

export default Outreach;
