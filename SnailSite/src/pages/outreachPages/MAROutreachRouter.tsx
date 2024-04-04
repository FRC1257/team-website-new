import { Route, Routes } from "react-router-dom";
import MAROutreach from "./MAROutreach";
import Robocon from "./Robocon";
import MenloMashup from "./MenloMashup";
import CrossteamColabs from "./CrossteamColabs";

const MAROutreachRouter = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<MAROutreach />} />
        <Route path="robocon" element={<Robocon />} />
        <Route path="menlo" element={<MenloMashup />} />
        <Route path="crossteam" element={<CrossteamColabs />} />
      </Routes>
    </>
  );
};

export default MAROutreachRouter;
