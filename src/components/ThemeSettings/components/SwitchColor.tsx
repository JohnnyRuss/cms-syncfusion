import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "@/data/dummy";
import { useAppContext } from "@/contexts/useProviders";

import { Check } from "@/components/Layouts/Icons";

const SwitchColor: React.FC = () => {
  const { onSetColor, currentColor } = useAppContext();

  return (
    <div className="flex-col border-t-1 p-4 ml-4 border-color">
      <p className="font-semibold text-lg">Theme Colors</p>

      <div className="flex gap-3 mt-3">
        {themeColors.map((color) => (
          <TooltipComponent
            key={color.color}
            content={color.name}
            position="TopCenter"
          >
            <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
              <button
                type="button"
                onClick={() => onSetColor(color.color)}
                style={{ backgroundColor: color.color }}
                className="h-10 w-10 rounded-full cursor-pointer"
              >
                <Check
                  className={`ml-2 text-2xl text-white ${
                    color.color === currentColor ? "block" : "hidden"
                  }`}
                />
              </button>
            </div>
          </TooltipComponent>
        ))}
      </div>
    </div>
  );
};

export default SwitchColor;
