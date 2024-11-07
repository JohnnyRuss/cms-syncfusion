import { lazy } from "react";

const Orders = lazy(() => import("@/components/Orders/Orders"));

const OrdersPage: React.FC = () => {
  return <Orders />;
};

export default OrdersPage;
