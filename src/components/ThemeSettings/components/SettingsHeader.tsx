import { useAppContext } from "@/contexts/useProviders";

import { Cancel } from "@/components/Layouts/Icons";

const SettingsHeader: React.FC = () => {
  const { onActivateSetting } = useAppContext();

  return (
    <div className="flex justify-between items-center p-4 ml-4">
      <p className="font-semibold text-xl">Settings</p>

      <button
        type="button"
        onClick={() => onActivateSetting(false)}
        className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
        style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
      >
        <Cancel />
      </button>
    </div>
  );
};

export default SettingsHeader;
