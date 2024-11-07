import {
  Inject,
  Legend,
  Tooltip,
  Category,
  DataLabel,
  ColumnSeries,
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  BarPrimaryXAxis,
  BarPrimaryYAxis,
} from "@/data/dummy";
import { useChartsColors } from "@/hooks";

import { Header } from "@/components/Layouts";

const BarChart: React.FC = () => {
  const { chartBgSettings, labelColorSetting, legendColorSetting, palette } =
    useChartsColors();

  return (
    <div className="m-4 md:m-10 mt-6 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        category="Chart"
        themeBase={true}
        title="Olympic Medal Counts - RIO"
      />

      <ChartComponent
        id="bar-chart"
        height="580px"
        palettes={palette}
        tooltip={{ enable: true }}
        background={chartBgSettings}
        chartArea={{ border: { width: 0 } }}
        legendSettings={{ textStyle: legendColorSetting }}
        primaryXAxis={{ ...BarPrimaryXAxis, labelStyle: labelColorSetting }}
        primaryYAxis={{ ...BarPrimaryYAxis, labelStyle: labelColorSetting }}
      >
        <Inject
          services={[Legend, Tooltip, ColumnSeries, DataLabel, Category]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={`area-item--${index}`} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default BarChart;
