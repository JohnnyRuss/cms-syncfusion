import { Header } from "@/components/Layouts";
import { Stacked } from "@/components/Layouts/Charts";

const StackedChart: React.FC = () => {
  return (
    <div className="m-4 md:m-10 mt-6 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        category="Chart"
        themeBase={true}
        title="Olympic Medal Counts - RIO"
      />

      <div className="w-full">
        <Stacked height="580px" width="100%" />
      </div>
    </div>
  );
};

export default StackedChart;
