import {
  Legend,
  Inject,
  Tooltip,
  Category,
  ChartComponent,
  SeriesDirective,
  StackingColumnSeries,
  SeriesCollectionDirective,
} from "@syncfusion/ej2-react-charts";

import {
  stackedCustomSeries,
  StackedPrimaryXAxis,
  StackedPrimaryYAxis,
} from "@/data/dummy";
import { useAppContext } from "@/contexts/useProviders";

type StackedT = {
  width: string;
  height: string;
};

const Stacked: React.FC<StackedT> = (props) => {
  const { currentMode, currentColor } = useAppContext();

  const palette = [currentColor, "#999"];
  const labelColorSetting = { color: currentColor };
  const bgColor = currentMode === "DARK" ? "rgb(32 35 42,0.7)" : "#fff";
  const legendColorSetting = {
    color: currentMode === "DARK" ? "#fff" : "#999",
  };

  return (
    <ChartComponent
      id="charts"
      palettes={palette}
      width={props.width}
      background={bgColor}
      height={props.height}
      tooltip={{ enable: true }}
      chartArea={{ border: { width: 0 } }}
      legendSettings={{ textStyle: legendColorSetting }}
      primaryXAxis={{ ...StackedPrimaryXAxis, labelStyle: labelColorSetting }}
      primaryYAxis={{ ...StackedPrimaryYAxis, labelStyle: labelColorSetting }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={`directive-${index}`} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
