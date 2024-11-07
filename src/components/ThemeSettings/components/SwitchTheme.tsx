import { useAppContext } from "@/contexts/useProviders";

const SwitchTheme: React.FC = () => {
  const { onSetMode, currentMode } = useAppContext();
  return (
    <div className="flex-col border-t-1 p-4 ml-4 border-color">
      <p className="font-semibold text-lg">Theme Options</p>

      <div className="mt-4">
        <input
          type="radio"
          id="light"
          name="theme"
          value="LIGHT"
          className="cursor-pointer"
          onChange={onSetMode}
          checked={currentMode === "LIGHT"}
        />

        <label htmlFor="light" className="ml-2 text-md cursor-pointer">
          Light
        </label>
      </div>

      <div className="mt-4">
        <input
          type="radio"
          id="dark"
          name="theme"
          value="DARK"
          className="cursor-pointer"
          onChange={onSetMode}
          checked={currentMode === "DARK"}
        />

        <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
          Dark
        </label>
      </div>
    </div>
  );
};

export default SwitchTheme;
