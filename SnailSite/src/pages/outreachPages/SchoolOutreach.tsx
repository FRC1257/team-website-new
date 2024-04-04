import Section from "../../components/Section";

import tempimg from "../../components/images/outreach/peprally1.png";

const SchoolOutreach = () => {
  return (
    <div>
      <div className="p-24 bg-gradient-to-r from-blue-500 to-fuchsia-800">
        <h1 className="text-center text-white lg:text-5xl text-3xl font-bold mb-8">
          Pep Rally
        </h1>
      </div>
      <div className="lg:p-24 p-12 bg-background">
        <div className="max-w-[96rem] mx-auto">
          <Section
            body="Hosted in early March, our robot showcase and pep rally aims to not only inspire school pride but also inspire young intellectuals. The event takes place in our school auditorium during lunch and is open to the entire district. We provide food, games, and entertainment – all Team 1257 themed! This year, we were able to amass a huge crowd that completely overtook the auditorium. Students were decked out in our team colors, purple and green, and wearing spirit wear such as our headbands and beaded necklaces"
            imgSrc={tempimg}
          />
          <Section
            body="Hosted in early March, our robot showcase and pep rally aims to not only inspire school pride but also inspire young intellectuals. The event takes place in our school auditorium during lunch and is open to the entire district. We provide food, games, and entertainment – all Team 1257 themed! This year, we were able to amass a huge crowd that completely overtook the auditorium. Students were decked out in our team colors, purple and green, and wearing spirit wear such as our headbands and beaded necklaces"
            imgSrc={tempimg}
          />
        </div>
      </div>
    </div>
  );
};

export default SchoolOutreach;
