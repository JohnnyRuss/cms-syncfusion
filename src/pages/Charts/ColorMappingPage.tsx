import { lazy } from "react";

const ColorMapping = lazy(
  () => import("@/components/ColorMapping/ColorMapping")
);

const ColorMappingPage: React.FC = () => {
  return <ColorMapping />;
};

export default ColorMappingPage;
