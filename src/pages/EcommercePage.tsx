import { lazy } from "react";

const Ecommerce = lazy(() =>
  delayForDemo(import("@/components/Ecommerce/Ecommerce"))
);

const EcommercePage: React.FC = () => {
  return <Ecommerce />;
};

export default EcommercePage;

function delayForDemo(promise: Promise<any>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
