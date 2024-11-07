import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

import { useAppContext } from "@/contexts/useProviders";

type PieChartT = {
  chartId: string;
  data: object[];
  height: string;
  legendVisiblity: boolean;
};

const PieChart: React.FC<PieChartT> = ({
  chartId,
  data,
  height,
  legendVisiblity,
}) => {
  const { currentMode } = useAppContext();

  return (
    <AccumulationChartComponent
      id={chartId}
      legendSettings={{ visible: legendVisiblity, background: "white" }}
      height={height}
      background={currentMode === "DARK" ? "#33373E" : "#fff"}
      tooltip={{ enable: true }}
    >
      <Inject
        services={[
          PieSeries,
          AccumulationLegend,
          AccumulationTooltip,
          AccumulationDataLabel,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Sale"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontWeight: "600",
              color: "#fff",
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart;
