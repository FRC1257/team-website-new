import { Link } from "react-router-dom";

const body1: string = `Team 1257 is 1 of only 2 members from the Mid Atlantic Region in Open Alliance, a community of FIRST robotics dedicated to creating a culture of collaboration and innovation in FIRST. As an open alliance member we made biweekly posts on Chief Delphi and we help other teams by sharing our code, build designs, CAD, progress updates, and anything else we feel will benefit other teams. Some of our most popular posts include our programming explanations, where we share our code and accompanying videos that explain how the code works. For example, our swerve programming posts feature a video explanation series, path planning stimulations, and all of our code repositories. The post received over 2,000 views from other FIRST robotics teams. Many teams thanked us for our post, saying that it was an “incredible resource” for them. We are also very active on the Open Alliance discord where we help other teams solve build, electronics, and programming issues.`;

const FIRSTOutreach = () => {
  return (
    <div>
      <div className="p-24 bg-gradient-to-r from-blue-500 to-fuchsia-800">
        <h1 className="text-center text-white lg:text-5xl text-3xl font-bold mb-8">
          Greater FIRST Community Initiatives
        </h1>
      </div>
      <div className="lg:p-24 p-12 bg-background">
        <div className="flex flex-col max-w-[96rem] mx-auto gap-10">
          <p className="text-xl flex flex-wrap leading-relaxed text-white">
            {body1}
          </p>
          <div className="flex flex-col items-center lg:flex-row font-bold lg:text-2xl text-lg text-white lg:mx-auto gap-2 lg:gap-10">
            <Link
              to="https://www.chiefdelphi.com/t/frc-1257-parallel-universe-2024-build-thread-open-alliance/447080/25"
              target="blank"
            >
              <button className="bg-primary-800 rounded-lg lg:p-10 p-4">
                Open Alliance Thread
              </button>
            </Link>
            <Link
              to="https://youtube.com/playlist?list=PLUniOkSvUS6qEUThVFekGeq427MZpcC5I"
              target="blank"
            >
              <button className="bg-primary-800 rounded-lg lg:p-10 p-4">
                Training Videos
              </button>
            </Link>
          </div>
          <p className="text-lg flex flex-wrap leading-relaxed text-white">
            {/* {body2} */}
          </p>
          {/* <img
            src={crossteam}
            alt={"stuff"}
            loading="lazy"
            className="block w-[640px] rounded-lg mx-auto"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default FIRSTOutreach;
