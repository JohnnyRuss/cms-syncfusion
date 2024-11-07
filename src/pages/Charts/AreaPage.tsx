import { lazy } from "react";

const AreaChart = lazy(() => import("@/components/AreaChart/AreaChart"));

const AreaPage: React.FC = () => {
  return <AreaChart />;
};

export default AreaPage;
