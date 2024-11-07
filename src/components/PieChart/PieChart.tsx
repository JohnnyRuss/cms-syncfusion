import { Header } from "@/components/Layouts";
import { PieChart as PieChartComponent } from "@/components/Layouts/Charts";

import { pieChartData } from "@/data/dummy";

const PieChart: React.FC = () => {
  return (
    <div className="m-4 md:m-10 mt-6 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        category="Chart"
        themeBase={true}
        title="Project Cost Breakdown"
      />

      <div className="w-full">
        <PieChartComponent
          chartId="chart-pie"
          data={pieChartData}
          legendVisiblity={true}
          height="580px"
        />
      </div>
    </div>
  );
};

export default PieChart;
