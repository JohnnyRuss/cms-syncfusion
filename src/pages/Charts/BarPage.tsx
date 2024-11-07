import { lazy } from "react";

const BarChart = lazy(() => import("@/components/BarChart/BarChart"));

const BarPage: React.FC = () => {
  return <BarChart />;
};

export default BarPage;
