// const body: string =
//   "Hosted in early March, our robot showcase and pep rally aims to not only inspire school pride but also inspire young intellectuals. The event takes place in our school auditorium during lunch and is open to the entire district. We provide food, games, and entertainment – all Team 1257 themed! This year, we were able to amass a huge crowd that completely overtook the auditorium. Students were decked out in our team colors, purple and green, and wearing spirit wear such as our headbands and beaded necklaces. During the pep rally, we brought in our robot to demonstrate its capabilities to the rest of the school. This year, our robot was accompanied by its own group of cheerleaders, all wearing our purple and green LED skirts! When our robot demonstrated its shooter by sending a note all the way across the auditorium, it was met with loud applause and enthusiastic cheers!";

import Card from "../../components/Card";

const LocalOutreach = () => {
  return (
    <div>
      <div className="p-24 bg-gradient-to-r from-blue-500 to-fuchsia-800">
        <h1 className="text-center text-white lg:text-5xl text-3xl font-bold mb-8">
          Local Initiatives
        </h1>
      </div>
      <div className="lg:p-24 p-12 bg-background">
        <div className="lg:p-24 p-12 bg-background">
          <div className="flex flex-row">
            <Card title="HydroCar" imgSrc="" to="/outreach/local/hydrocar" />
            <Card
              title="Summer Camp"
              imgSrc=""
              to="/outreach/local/summercamp"
            />
            <Card
              title="Scout Troops"
              imgSrc=""
              to="/outreach/local/scouttroops"
            />
            <Card
              title="Local Sponsors"
              imgSrc=""
              to="/outreach/local/sponsors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalOutreach;
