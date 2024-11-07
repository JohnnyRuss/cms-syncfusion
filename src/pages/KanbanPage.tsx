import { lazy } from "react";

const Kanban = lazy(() => import("@/components/Kanban/Kanban"));

const KanbanPage: React.FC = () => {
  return <Kanban />;
};

export default KanbanPage;
