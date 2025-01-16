import awards, { AwardProps } from "./awardDescriptions";
import "./Awards.css";

const Awards = () => {
  return (
    <div className="lg:p-24 p-4 bg-background">
      <div className="flex mx-auto">
        <ul className="banners font-bold mx-auto">
          <li>
            <img src="pics/frc/FIRST_just_logo.png" className="mx-auto" alt="FMA Montgomery" />2024
            <p>Mid-Atlantic Robotics Seneca</p>
            <p>Winner</p>
          </li>
          <li>
            <img src="pics/frc/FIRST_just_logo.png" className="mx-auto" alt="FMA Montgomery" />2023
            <p>Mid-Atlantic Robotics Montgomery</p>
            <p>Finalist</p>
          </li>
          <li>
            <img src="pics/frc/FIRST_just_logo.png" className="mx-auto" alt="FMA Mount Olive" />2016
            <p>Mid-Atlantic Robotics Mount Olive</p>
            <p>Winner</p>
          </li>
          <li>
            <img src="pics/frc/FIRST_just_logo.png" className="mx-auto" alt="DCMP" />2016
            <p>Mid-Atlantic Robotics District Championship</p>
            <p>Winner</p>
          </li>
          <li>
            <img src="pics/frc/FIRST_just_logo.png" className="mx-auto" alt="FMA Clifton" />2014
            <p>Mid-Atlantic Robotics Clifton</p>
            <p>Winner</p>
          </li>
        </ul>
      </div>
      <div className="text-white container mx-auto">
        <div className="text-xl font-bold">Year</div>
        <div className="text-xl font-bold">Event</div>
        <div className="text-xl font-bold">Awards</div>
        <div className="grid-item-header">2024</div>
        <div className="grid-item-header">FMA Seneca Event 2024</div>
        <div className="grid-item-header">Winner</div>
        {awards.map(({ year, comp, award }: AwardProps) =>
        (
          <>
            <div className="grid-item">{year}</div>
            <div className="grid-item">{comp}</div>
            <div className="grid-item">{award}</div>
          </>
        )
        )}
      </div>
    </div>
  );
};

export default Awards;
