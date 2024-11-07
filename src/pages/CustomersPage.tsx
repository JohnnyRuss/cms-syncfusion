import { lazy } from "react";

const Customers = lazy(() => import("@/components/Customers/Customers"));

const CustomersPage: React.FC = () => {
  return <Customers />;
};

export default CustomersPage;
