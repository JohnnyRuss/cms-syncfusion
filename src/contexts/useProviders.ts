import { useContext } from "react";

import { AppContext } from "./AppContextProvider";

const useAppContext = () => useContext(AppContext);

export { useAppContext };
