import frc from "./images/FIRST_logo.png";
// team history with all robots as well as timeline

// awards on separate page probably
// add images

const ParagraphSection = () => {
  return (
    <div className="bg-red-300 mx-96 my-24 text-lg">
      <h1 className="text-3xl font-bold mb-4">About Our Team</h1>
      <p className="mb-8">
        Team 1257 Parallel Universe is an unparalleled FIRST team that strives
        to inspire passion for STEM. We design and fabricate robots for the
        FIRST Robotics Competition (FRC) in order to develop talent in STEM and
        prepare a new generation of innovators, leaders, and entrepreneurs. Our
        aspiration is to create a community excited about STEM at the Union
        County Vocational-Technical Schools and beyond through FRC and our
        community outreach programs.
      </p>
      <h1 className="text-3xl font-bold mb-4">Mission Statement</h1>
      <p className="mb-8">
        To foster an inclusive environment where all students are motivated to
        acquire skills essential for real-world success through student-driven
        initiatives promoting creativity, confidence, education, engagement, and
        leadership in STEM and business-oriented projects.
      </p>
      <h1 className="text-3xl font-bold mb-4">Our Awards</h1>
      <p>Take a look at what we've done, and how far we've come below!</p>
      <ul className="banners font-bold">
        <li className="flex">
          <img src={frc} alt="Clifton" className="m-auto" />
          2014
          <br />
          Mid-Atlantic Robotics Clifton
          <br />
          Winner
        </li>
        <li>
          <img src={frc} alt="Olive" className="m-auto" />
          2016
          <br />
          Mid-Atlantic Robotics Mount Olive Winner
        </li>
        <li>
          <img src={frc} alt="DCMP" className="m-auto" />
          2016
          <br />
          Mid-Atlantic Robotics District Championship Winner
        </li>
        <li>
          <img src={frc} alt="Montgomery" className="m-auto" />
          2023
          <br />
          Mid-Atlantic Robotics Montgomery
          <br />
          Finalist
        </li>
      </ul>
      <h1 className="text-3xl font-bold mb-4">About FIRST</h1>
      <p className="mb-2">
        FIRST is an international, not-for-profit organization that was founded
        in 1989 in Manchester, NH. FIRST had goals to inspire younger people to
        become interested in STEM. The organization currently has four programs
        that support their goal.
      </p>
      <p className="mb-2">
        The main mission of FIRST is to inspire interest in STEM. They also
        emphasize innovation, teamwork, leadership, communication, confidence,
        and pursuing education and opportunities. These skills help prepare
        young people for the job opportunities that have been rapidly increasing
        recently.
      </p>
      <p className="mb-8">
        The four programs that FIRST has are, FIRST LEGO League (Jr. FLL and
        FLL), FIRST Tech Challenge (FTC), and the FIRST Robotics Competition
        (FRC). Team 1257 is a FIRST Robotics Competition (FRC) team. Every year,
        thousands of teams come up with a unique solution to the game of the
        year. Teams design, build, test, and compete with their unique game
        solution every year. They compete in local, regional, and even world
        competitions.
      </p>
    </div>
  );
};

export default ParagraphSection;
