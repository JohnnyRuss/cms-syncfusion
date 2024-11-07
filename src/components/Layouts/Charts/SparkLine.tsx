import React from "react";

import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import { SparklineChartDataT } from "@/types/data.types";

type SparkLineT = {
  currentColor: string;
  id: string;
  type: "Line" | "Area";
  height: string;
  width?: string;
  data: SparklineChartDataT;
  color?: string;
};

class SparkLine extends React.PureComponent<SparkLineT> {
  render() {
    const { id, height, width, data, type, currentColor } = this.props;

    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={"rgba(255,255,255,0"}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: "${x} : data ${yval}",
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{ visible: ["All"], size: 2.5, fill: currentColor }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine;
