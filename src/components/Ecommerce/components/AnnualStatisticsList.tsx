import { earningData } from "@/data/dummy";

const AnnualStatisticsList: React.FC = () => {
  return (
    <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
      {earningData.map((earning) => (
        <div
          key={earning.title}
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
        >
          <button
            type="button"
            style={{
              color: earning.iconColor,
              backgroundColor: earning.iconBg,
            }}
            className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
          >
            {earning.icon}
          </button>

          <p className="mt-3 ">
            <span className="text-lg font-semibold ">{earning.amount}</span>

            <span className={`text-sm text-${earning.pcColor} ml-2 `}>
              {earning.percentage}
            </span>
          </p>

          <p className="text-sm text-gray-400 mt-1">{earning.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AnnualStatisticsList;
