import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useAppContext } from "@/contexts/useProviders";

import { Settings } from "@/components/Layouts/Icons";

const SettingsTooltip: React.FC = () => {
  const { onActivateSetting, currentColor } = useAppContext();

  return (
    <div className="fixed right-4 bottom-4 z-[1000]">
      <TooltipComponent content="Settings" position="TopRight">
        <button
          type="button"
          onClick={() => onActivateSetting(true)}
          style={{ backgroundColor: currentColor }}
          className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white  rounded-full"
        >
          <Settings />
        </button>
      </TooltipComponent>
    </div>
  );
};

export default SettingsTooltip;
