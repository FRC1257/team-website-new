import Masonry from "@mui/lab/Masonry";
import pep3 from "../../components/images/outreach/peprally3.png";
import pep2 from "../../components/images/outreach/peprally2.png";

const body: string =
  "Hosted in early March, our robot showcase and pep rally aims to not only inspire school pride but also inspire young intellectuals. The event takes place in our school auditorium during lunch and is open to the entire district. We provide food, games, and entertainment – all Team 1257 themed! This year, we were able to amass a huge crowd that completely overtook the auditorium. Students were decked out in our team colors, purple and green, and wearing spirit wear such as our headbands and beaded necklaces. During the pep rally, we brought in our robot to demonstrate its capabilities to the rest of the school. This year, our robot was accompanied by its own group of cheerleaders, all wearing our purple and green LED skirts! When our robot demonstrated its shooter by sending a note all the way across the auditorium, it was met with loud applause and enthusiastic cheers!";

const SchoolOutreach = () => {
  return (
    <div>
      <div className="p-24 bg-gradient-to-r from-blue-500 to-fuchsia-800">
        <h1 className="text-center text-white lg:text-5xl text-3xl font-bold mb-8">
          Pep Rally
        </h1>
      </div>
      <div className="lg:p-24 p-12 bg-background">
        <div className="flex flex-col max-w-[96rem] mx-auto gap-10">
          <p className="text-lg flex flex-wrap leading-relaxed text-white">
            {body}
          </p>
          <Masonry columns={2}>
            <img
              // srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={pep3}
              alt={"stuff"}
              loading="lazy"
              className="block w-full rounded-lg"
            />
            <img
              // srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={pep2}
              alt={"stuff"}
              loading="lazy"
              className="block w-full rounded-lg"
            />
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default SchoolOutreach;
