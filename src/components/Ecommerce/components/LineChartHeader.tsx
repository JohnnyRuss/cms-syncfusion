const LineChartHeader: React.FC = () => {
  return (
    <>
      <div className="text-center">
        <p className="text-gray-400 mt-1">Budget</p>

        <p className="items-center gap-2 flex justify-center">
          <span className="text-3xl font-semibold">$93,438</span>
          <span className="inline-block p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full bg-green-400 text-white text-xs mt-[-14px]">
            23%
          </span>
        </p>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400 mt-1">Expense</p>

        <p className="text-center">
          <span className="text-3xl font-semibold">$48,438</span>
        </p>
      </div>
    </>
  );
};

export default LineChartHeader;
