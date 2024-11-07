import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "@/App";
import "./styles/index.css";
import "./styles/app.css";
import "./styles/rewrite-fusion.css";

import AppContextProvider from "./contexts/AppContextProvider";

createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Router>
);
