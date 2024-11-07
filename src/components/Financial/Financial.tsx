import {
  Zoom,
  Inject,
  Tooltip,
  DateTime,
  Crosshair,
  HiloSeries,
  Logarithmic,
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
} from "@syncfusion/ej2-react-charts";

import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "@/data/dummy";
import { useChartsColors } from "@/hooks";

import { Header } from "@/components/Layouts";

const date1 = new Date("2017, 1, 1");

function filterValue(value: any) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}

const returnValue = financialChartData.filter(filterValue);

const Financial: React.FC = () => {
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
        crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
        primaryXAxis={{
          ...FinancialPrimaryXAxis,
          labelStyle: labelColorSetting,
        }}
        primaryYAxis={{
          ...FinancialPrimaryYAxis,
          labelStyle: labelColorSetting,
        }}
      >
        <Inject
          services={[
            Zoom,
            Tooltip,
            DateTime,
            Crosshair,
            HiloSeries,
            Logarithmic,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={returnValue}
            xName="x"
            yName="low"
            name="Apple Inc"
            type="Hilo"
            low="low"
            high="high"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
