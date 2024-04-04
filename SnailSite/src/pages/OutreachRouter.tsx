import { Route, Routes } from "react-router-dom";
import SchoolOutreach from "./outreachPages/SchoolOutreach";
import Outreach from "./Outreach";
import MAROutreach from "./outreachPages/MAROutreach";
import FIRSTOutreach from "./outreachPages/FIRSTOutreach";
import LocalOutreachRouter from "./outreachPages/LocalOutreachRouter";

const OutreachRouter = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Outreach />} />
        <Route path="school" element={<SchoolOutreach />} />
        <Route path="local/*" element={<LocalOutreachRouter />} />
        <Route path="mar" element={<MAROutreach />} />
        <Route path="first" element={<FIRSTOutreach />} />
      </Routes>
    </>
  );
};

export default OutreachRouter;
