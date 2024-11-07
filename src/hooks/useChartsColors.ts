import { useAppContext } from "@/contexts/useProviders";

export default function useChartsColors() {
  const { currentMode, currentColor } = useAppContext();

  const palette = ["#9AEBA3", "#45C4B0", "#13678A"];
  const labelColorSetting = { color: currentColor };
  const legendColorSetting = {
    color: currentMode === "DARK" ? "#fff" : "#999",
  };
  const chartBgSettings = currentMode === "DARK" ? "#33373e" : "#fff";

  return { palette, labelColorSetting, legendColorSetting, chartBgSettings };
}
