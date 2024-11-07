import { SettingsTooltip, Sidebar, Navbar, ThemeSettings } from "@/components";
import { useAppContext } from "@/contexts/useProviders";

type AppLayoutT = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutT> = ({ children }) => {
  const { activeSidebar, isOpenThemeSettings, currentMode, currentColor } =
    useAppContext();

  return (
    <div
      className={`${currentMode === "DARK" ? "dark" : ""} bg-red-400`}
      data-current-color={currentColor.replace("#", "")}
    >
      <div className="flex relative dark:bg-main-dark-bg">
        <SettingsTooltip />

        <Sidebar />

        <div
          className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
            activeSidebar ? "md:ml-72" : " flex-2"
          }`}
        >
          <Navbar />

          <div>
            {isOpenThemeSettings && <ThemeSettings />}

            {/* Children Are here ROUTES */}
            <div className="relative">{children}</div>
          </div>

          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
