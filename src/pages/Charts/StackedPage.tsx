import { lazy } from "react";

const StackedChart = lazy(
  () => import("@/components/StackedChart/StackedChart")
);

const StackedPage: React.FC = () => {
  return <StackedChart />;
};

export default StackedPage;
