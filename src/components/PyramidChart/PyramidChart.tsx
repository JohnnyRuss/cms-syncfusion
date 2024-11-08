import {
  Inject,
  PyramidSeries,
  AccumulationLegend,
  AccumulationTooltip,
  AccumulationDataLabel,
  AccumulationSelection,
  AccumulationChartComponent,
  AccumulationSeriesDirective,
  AccumulationSeriesCollectionDirective,
} from "@syncfusion/ej2-react-charts";

import { PyramidData } from "@/data/dummy";
import { useChartsColors } from "@/hooks";

import { Header } from "@/components/Layouts";

const PyramidChart: React.FC = () => {
  const { chartBgSettings, legendColorSetting } = useChartsColors();

  return (
    <div className="m-4 md:m-10 mt-6 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        category="Chart"
        themeBase={true}
        title="Olympic Medal Counts - RIO"
      />

      <div className="w-full">
        <AccumulationChartComponent
          id="bar-chart"
          height="580px"
          tooltip={{ enable: true }}
          background={chartBgSettings}
          legendSettings={{ textStyle: legendColorSetting }}
        >
          <Inject
            services={[
              PyramidSeries,
              AccumulationLegend,
              AccumulationTooltip,
              AccumulationDataLabel,
              AccumulationSelection,
            ]}
          />

          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: "Drop", fill: "red" }}
              dataLabel={{
                visible: true,
                position: "Inside",
                name: "text",
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default PyramidChart;
