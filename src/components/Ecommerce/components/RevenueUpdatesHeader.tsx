import { Dot } from "@/components/Layouts/Icons";
import { useAppContext } from "@/contexts/useProviders";

const RevenueUpdatesHeader: React.FC = () => {
  const { currentColor } = useAppContext();

  return (
    <div className="flex justify-between ">
      <p className="font-semibold text-xl">Revenue Updates</p>

      <div className="flex items-center gap-4">
        <p className="flex items-center gap-2 text-gray-400 hover:drop-shadow-xl">
          <span>
            <Dot />
          </span>
          <span>Expense</span>
        </p>

        <p
          style={{ color: currentColor }}
          className="flex items-center gap-2 hover:drop-shadow-xl"
        >
          <span>
            <Dot />
          </span>
          <span>Budget</span>
        </p>
      </div>
    </div>
  );
};

export default RevenueUpdatesHeader;
