import { SparklineAreaData } from "@/data/dummy";
import { useAppContext } from "@/contexts/useProviders";

import * as UI from "./components";
import { Button } from "@/components/Layouts";
import { Stacked, SparkLine } from "@/components/Layouts/Charts";

const Ecommerce: React.FC = () => {
  const { currentColor } = useAppContext();

  return (
    <div className="mt-12 ">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <UI.Earnings />

        <UI.AnnualStatisticsList />
      </div>

      <div className="flex gap-10 flex-wrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-[77%]">
          <UI.RevenueUpdatesHeader />

          <div className="mt-10 flex gap-10 flex-wrap justify-between">
            <div className="border-r-1 border-color m-4 md:w-[45%] w-full flex flex-col justify-center">
              <UI.LineChartHeader />

              <div className="mt-5 w-full flex justify-center">
                <SparkLine
                  type="Area"
                  height="80px"
                  width="70%"
                  id="area-sparkline"
                  currentColor={currentColor}
                  data={SparklineAreaData}
                />
              </div>

              <div className="mt-10 self-center">
                <Button
                  onClick={() => {}}
                  text="Download Report"
                  bgColor={currentColor}
                  color="white"
                  borderRadius={10}
                />
              </div>
            </div>

            <div className="w-full md:w-[45%] flex justify-center items-center">
              <Stacked width="400px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
