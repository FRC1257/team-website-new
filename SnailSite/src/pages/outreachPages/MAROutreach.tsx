import Card from "../../components/Card";

const MAROutreach = () => {
  return (
    <div>
      <div className="p-24 bg-gradient-to-r from-blue-500 to-fuchsia-800">
        <h1 className="text-center text-white lg:text-5xl text-3xl font-bold mb-8">
          Mid-Atlantic Initiatives
        </h1>
      </div>
      <div className="lg:p-24 p-12 bg-background">
        <div className="lg:p-24 p-12 bg-background">
          <div className="flex flex-row">
            <Card title="Robocon" imgSrc="" to="/outreach/mar/robocon" />
            <Card title="Menlo Mashup" imgSrc="" to="/outreach/mar/menlo" />
            <Card
              title="Team Colabs"
              imgSrc=""
              to="/outreach/local/crossteam"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MAROutreach;