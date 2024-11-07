import { lazy } from "react";

const Employees = lazy(() => import("@/components/Employees/Employees"));

const EmployeesPage: React.FC = () => {
  return <Employees />;
};

export default EmployeesPage;
