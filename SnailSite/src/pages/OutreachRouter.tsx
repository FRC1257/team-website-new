import { Route, Routes } from "react-router-dom";
import SchoolOutreach from "./outreachPages/SchoolOutreach";
import Outreach from "./Outreach";
import FIRSTOutreach from "./outreachPages/FIRSTOutreach";
import LocalOutreachRouter from "./outreachPages/LocalOutreachRouter";
import MAROutreachRouter from "./outreachPages/MAROutreachRouter";

const OutreachRouter = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Outreach />} />
        <Route path="school" element={<SchoolOutreach />} />
        <Route path="local/*" element={<LocalOutreachRouter />} />
        <Route path="mar/*" element={<MAROutreachRouter />} />
        <Route path="first" element={<FIRSTOutreach />} />
      </Routes>
    </>
  );
};

export default OutreachRouter;
