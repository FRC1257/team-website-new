import { Route, Routes } from "react-router-dom";
import LocalOutreach from "./LocalOutreach";
import Hydrocar from "./Hydrocar";
import SummerCamp from "./SummerCamp";

const LocalOutreachRouter = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<LocalOutreach />} />
        <Route path="hydrocar" element={<Hydrocar />} />
        <Route path="summercamp" element={<SummerCamp />} />
      </Routes>
    </>
  );
};

export default LocalOutreachRouter;
