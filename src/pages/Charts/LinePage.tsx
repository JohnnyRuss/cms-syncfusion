import { lazy } from "react";

const LineChart = lazy(() => import("@/components/LineChart/LineChart"));

const LinePage: React.FC = () => {
  return <LineChart />;
};

export default LinePage;
