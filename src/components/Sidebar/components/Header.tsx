import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Logo } from "./";
import { Cancel } from "@/components/Layouts/Icons";
import { useAppContext } from "@/contexts/useProviders";

const Header: React.FC = () => {
  const { toggleSidebar } = useAppContext();

  return (
    <div className="sticky left-0 top-0 bg-main-bg dark:bg-secondary-dark-bg flex justify-between items-center ">
      <Logo />

      <TooltipComponent content="Menu" position="BottomCenter">
        <button
          type="button"
          onClick={() => toggleSidebar(true)}
          className="text-2xl rounded-full p-3 text-white hover:bg-light-gray mt-4 "
        >
          <Cancel />
        </button>
      </TooltipComponent>
    </div>
  );
};

export default Header;
