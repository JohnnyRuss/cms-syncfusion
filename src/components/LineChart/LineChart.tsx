import { Header } from "@/components/Layouts";
import { LineChart as LineChartComponent } from "@/components/Layouts/Charts";

const LineChart: React.FC = () => {
  return (
    <div className="m-4 md:m-10 mt-6 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Inflation Rate" themeBase={true} />

      <LineChartComponent />
    </div>
  );
};

export default LineChart;
