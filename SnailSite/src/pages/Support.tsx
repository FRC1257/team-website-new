import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="p-24 bg-background">
      <div className="flex flex-col gap-2 text-white max-w-[72rem] mx-auto mb-12">
        <h1 className="text-center text-5xl font-bold mb-4">CONTACT INFO</h1>
        <p className="text-center text-2xl leading-tight mb-2">
          Please address any inquiries on sponsorships or mentoring to Mrs.
          Michele Cook.
        </p>
        <p className="text-center text-2xl leading-tight mb-2">
          Tel: 908-889-8288 x255
        </p>
        <p className="text-center text-2xl leading-tight mb-8">
          Email: mcook@ucvts.org
        </p>
        <div className="flex flex-row font-bold text-2xl text-white mx-auto gap-10">
          <Link
            to="https://docs.google.com/document/d/1ZoW9DAPcqLLtVPsWB_YV7cHA_4WZDqq0P9M5zRdxW9U/edit?usp=sharing"
            target="blank"
          >
            <button className="bg-primary-800 rounded-lg p-10">
              Sponsor Letter
            </button>
          </Link>
          <Link
            to="https://drive.google.com/file/d/18ViTUTPsm2MiOwQ9IdrO4Cqj06d0TKek/view?usp=sharing"
            target="blank"
          >
            <button className="bg-primary-800 rounded-lg p-10">
              Mentor Procedure
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Support;
