import { useAppContext } from "@/contexts/useProviders";

import { Button } from "@/components/Layouts";

const Earnings: React.FC = () => {
  const { currentColor } = useAppContext();

  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-gray-400">Earnings</p>
          <p className="text-2xl">$63,448.78</p>
        </div>
      </div>

      <div className="mt-6 ">
        <Button
          color="white"
          bgColor={currentColor}
          text="Download"
          borderRadius={10}
          size={14}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Earnings;
