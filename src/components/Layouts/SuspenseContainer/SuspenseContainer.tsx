import { Suspense } from "react";
import { Spinner } from "@/components/Layouts";

type SuspenseContainerT = {
  children: React.ReactNode;
};

const SuspenseContainer: React.FC<SuspenseContainerT> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
};

export default SuspenseContainer;
