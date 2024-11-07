import { lazy } from "react";

const PieChart = lazy(() => import("@/components/PieChart/PieChart"));

const PiePage: React.FC = () => {
  return <PieChart />;
};

export default PiePage;
