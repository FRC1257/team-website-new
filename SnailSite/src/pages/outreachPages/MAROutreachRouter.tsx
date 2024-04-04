import { Route, Routes } from "react-router-dom";
import MAROutreach from "./MAROutreach";
import Robocon from "./Robocon";

const MAROutreachRouter = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<MAROutreach />} />
        <Route path="robocon" element={<Robocon />} />
        {/* <Route path="menlo" element={<MenloMashup />} /> */}
        {/* <Route path="crossteam" element={<Crossteam />} /> */}
      </Routes>
    </>
  );
};

export default MAROutreachRouter;
