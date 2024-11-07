import * as UI from "./components";

const ThemeSettings: React.FC = () => {
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-secondary-dark-bg w-400">
        <UI.SettingsHeader />

        <UI.SwitchTheme />

        <UI.SwitchColor />
      </div>
    </div>
  );
};

export default ThemeSettings;
