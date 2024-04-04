import { Route, Routes } from "react-router-dom";
import LocalOutreach from "./LocalOutreach";
import Hydrocar from "./Hydrocar";
import SummerCamp from "./SummerCamp";
import ScoutTroops from "./ScoutTroops";
import LocalSponsors from "./LocalSponsors";

const LocalOutreachRouter = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<LocalOutreach />} />
        <Route path="hydrocar" element={<Hydrocar />} />
        <Route path="summercamp" element={<SummerCamp />} />
        <Route path="scouttroops" element={<ScoutTroops />} />
        <Route path="sponsors" element={<LocalSponsors />} />
      </Routes>
    </>
  );
};

export default LocalOutreachRouter;
