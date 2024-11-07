import { createContext, useEffect, useState } from "react";

type AppContextProviderT = {
  children: React.ReactNode;
};

type AppContextT = {
  activeSidebar: boolean;
  toggleSidebar: (close?: boolean) => void;
  navbarSidebarsState: NavbarSidebarsStateT;
  handleNavbarSidebarsState: (key: keyof NavbarSidebarsStateT) => void;
  closeSidebarBasedOnWindowDimension: () => void;
  currentColor: string;
  currentMode: CMS_ThemeModeT;
  onSetMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSetColor: (color: string) => void;
  isOpenThemeSettings: boolean;
  onActivateSetting: (open: boolean) => void;
};

type NavbarSidebarsStateT = {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notifications: boolean;
};

type CMS_ThemeModeT = "LIGHT" | "DARK";

const navbarSidebarsInitialState = {
  cart: false,
  chat: false,
  notifications: false,
  userProfile: false,
};

export const AppContext = createContext<AppContextT>({
  activeSidebar: true,
  toggleSidebar: () => {},
  handleNavbarSidebarsState: () => {},
  closeSidebarBasedOnWindowDimension: () => {},
  navbarSidebarsState: navbarSidebarsInitialState,
  currentColor: "",
  currentMode: "LIGHT",
  onSetColor: () => {},
  onSetMode: () => {},
  isOpenThemeSettings: false,
  onActivateSetting: () => {},
});

const AppContextProvider: React.FC<AppContextProviderT> = ({ children }) => {
  // Sidebar Left //
  const [activeSidebar, setActiveSidebar] = useState<boolean>(true);

  const toggleSidebar = (close?: boolean) =>
    setActiveSidebar((prev) => (close !== undefined ? !close : !prev));

  const closeSidebarBasedOnWindowDimension = () =>
    toggleSidebar(windowDimension <= 900);

  const [windowDimension, setWindowDimension] = useState<number>(NaN);

  useEffect(() => {
    const handleResize = () => setWindowDimension(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    closeSidebarBasedOnWindowDimension();
  }, [windowDimension]);

  // Sidebar Right (opened from navbar) //
  const [navbarSidebarsState, setNavbarSidebarsState] =
    useState<NavbarSidebarsStateT>(navbarSidebarsInitialState);

  const handleNavbarSidebarsState = (_key: keyof NavbarSidebarsStateT) => {
    // setNavbarSidebarsState((prev) => ({
    //   ...navbarSidebarsInitialState,
    //   [key]: !prev[key],
    // }));
    setNavbarSidebarsState((prev) => ({ ...prev }));
  };

  // Theme //
  const defaultThemeColor = "#1e4db7";
  const [currentColor, setCurrentColor] = useState(defaultThemeColor);
  const [currentMode, setCurrentMode] = useState<CMS_ThemeModeT>("LIGHT");
  const [isOpenThemeSettings, setIsOpenThemeSettings] =
    useState<boolean>(false);

  const onActivateSetting = (open: boolean) => {
    if (open) {
      setIsOpenThemeSettings(true);
      setActiveSidebar(false);
    } else setIsOpenThemeSettings(false);
  };

  const onSetMode: AppContextT["onSetMode"] = (e) => {
    const value = e.target.value;
    setCurrentMode(value as CMS_ThemeModeT);
    localStorage.setItem("cms_theme", value);
  };

  const onSetColor: AppContextT["onSetColor"] = (color) => {
    setCurrentColor(color);
    setIsOpenThemeSettings(false);
    localStorage.setItem("cms_theme_color", color);
    setThemeColorToCSSRoot(color);
  };

  useEffect(() => {
    const receivedCurrentColor = localStorage.getItem("cms_theme_color");
    const receivedCurrentMode = localStorage.getItem("cms_theme");

    if (receivedCurrentColor) {
      setCurrentColor(receivedCurrentColor);
      setThemeColorToCSSRoot(receivedCurrentColor);
    } else localStorage.setItem("cms_theme_color", defaultThemeColor);

    if (receivedCurrentMode)
      setCurrentMode(receivedCurrentMode as CMS_ThemeModeT);
    else localStorage.setItem("cms_theme", "LIGHT");
  }, []);

  return (
    <AppContext.Provider
      value={{
        activeSidebar,
        toggleSidebar,
        navbarSidebarsState,
        handleNavbarSidebarsState,
        closeSidebarBasedOnWindowDimension,
        currentColor,
        currentMode,
        onSetColor,
        onSetMode,
        isOpenThemeSettings,
        onActivateSetting,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

function hexToRgb(hex: string) {
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length == 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length == 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `${r}, ${g}, ${b}`;
}

function setThemeColorToCSSRoot(color: string) {
  document.documentElement.style.setProperty("--theme-color", color);

  const rgbColor = hexToRgb(color);
  document.documentElement.style.setProperty("--theme-color-rgb", rgbColor);
}
