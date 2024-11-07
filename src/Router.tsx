import { Routes, Route } from "react-router-dom";

import { Router as RouterMap } from "@/routes/router";
import { SuspenseContainer } from "@/components/Layouts";

const Router: React.FC = () => {
  return (
    <SuspenseContainer>
      <Routes>
        {RouterMap.map((route) => (
          <Route key={route.title} path={route.path} element={route.element} />
        ))}
      </Routes>
    </SuspenseContainer>
  );
};

export default Router;
