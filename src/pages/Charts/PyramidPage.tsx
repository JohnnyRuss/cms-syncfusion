import { lazy } from "react";

const PyramidChart = lazy(
  () => import("@/components/PyramidChart/PyramidChart")
);

const PyramidPage: React.FC = () => {
  return <PyramidChart />;
};

export default PyramidPage;
