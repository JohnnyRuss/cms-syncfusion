import { lazy } from "react";

const Financial = lazy(() => import("@/components/Financial/Financial"));

const FinancialPage: React.FC = () => {
  return <Financial />;
};

export default FinancialPage;
