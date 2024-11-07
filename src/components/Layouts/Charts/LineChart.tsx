import {
  Legend,
  Inject,
  Tooltip,
  DateTime,
  LineSeries,
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  LinePrimaryYAxis,
  LinePrimaryXAxis,
} from "@/data/dummy";

import { useChartsColors } from "@/hooks";

const LineChart: React.FC = () => {
  const { chartBgSettings, labelColorSetting, legendColorSetting, palette } =
    useChartsColors();

  return (
    <ChartComponent
      id="line-chart"
      height="580px"
      palettes={palette}
      tooltip={{ enable: true }}
      background={chartBgSettings}
      chartArea={{ border: { width: 0 } }}
      legendSettings={{ textStyle: legendColorSetting }}
      primaryXAxis={{ ...LinePrimaryXAxis, labelStyle: labelColorSetting }}
      primaryYAxis={{ ...LinePrimaryYAxis, labelStyle: labelColorSetting }}
    >
      <Inject services={[Legend, DateTime, LineSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={`line-item--${index}`} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
