import { lazy } from "react";

const ColorPicker = lazy(() => import("@/components/ColorPicker/ColorPicker"));

const ColorPickerPage: React.FC = () => {
  return <ColorPicker />;
};

export default ColorPickerPage;
