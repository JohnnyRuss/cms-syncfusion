import {
  Legend,
  Inject,
  DateTime,
  SplineAreaSeries,
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
} from "@syncfusion/ej2-react-charts";

import {
  areaCustomSeries,
  AreaPrimaryXAxis,
  AreaPrimaryYAxis,
} from "@/data/dummy";

import { Header } from "@/components/Layouts";
import { useChartsColors } from "@/hooks";

const AreaChart: React.FC = () => {
  const { chartBgSettings, labelColorSetting, legendColorSetting, palette } =
    useChartsColors();

  return (
    <div className="m-4 md:m-10 mt-6 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        category="Chart"
        themeBase={true}
        title="Inflation Rate In Percentage"
      />

      <ChartComponent
        id="line-chart"
        height="580px"
        palettes={palette}
        tooltip={{ enable: true }}
        background={chartBgSettings}
        chartArea={{ border: { width: 0 } }}
        legendSettings={{ textStyle: legendColorSetting }}
        primaryXAxis={{ ...AreaPrimaryXAxis, labelStyle: labelColorSetting }}
        primaryYAxis={{ ...AreaPrimaryYAxis, labelStyle: labelColorSetting }}
      >
        <Inject services={[Legend, DateTime, SplineAreaSeries]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={`area-item--${index}`} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default AreaChart;
