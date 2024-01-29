import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import Account from "../screens/Account";
import ActivitiesTable from "../components/ActivitiesTable";

const Router = () => {
  return (
    <Routes>
        <Route path="/account" element={<DashboardLayout><Account/></DashboardLayout>} />
        <Route path="/activities" element={<DashboardLayout><ActivitiesTable/></DashboardLayout>} />
    </Routes>
  );
};

export default Router;
