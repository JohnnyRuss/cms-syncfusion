import {
  Inject,
  Legend,
  Tooltip,
  Category,
  ColumnSeries,
  ChartComponent,
  SeriesDirective,
  SeriesCollectionDirective,
  RangeColorSettingDirective,
  RangeColorSettingsDirective,
} from "@syncfusion/ej2-react-charts";

import {
  colorMappingData,
  rangeColorMapping,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
} from "@/data/dummy";
import { useChartsColors } from "@/hooks";

import { Header } from "@/components/Layouts";

const ColorMapping: React.FC = () => {
  const { chartBgSettings, labelColorSetting, legendColorSetting, palette } =
    useChartsColors();

  return (
    <div className="m-4 md:m-10 mt-6 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        category="Chart"
        themeBase={true}
        title="USA Climate - Weather By Month"
      />

      <div className="w-full">
        <ChartComponent
          id="bar-chart"
          height="580px"
          palettes={palette}
          tooltip={{ enable: true }}
          background={chartBgSettings}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ textStyle: legendColorSetting, mode: "Range" }}
          primaryXAxis={{
            ...ColorMappingPrimaryXAxis,
            labelStyle: labelColorSetting,
          }}
          primaryYAxis={{
            ...ColorMappingPrimaryYAxis,
            labelStyle: labelColorSetting,
          }}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />

          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective key={index} {...item} />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;
