import { Suspense } from "react";

type SuspenseContainerT = {
  children: React.ReactNode;
};

const SuspenseContainer: React.FC<SuspenseContainerT> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="text-gray-700 bg-blue-500 absolute inset-0 flex justify-center items-center">
          Loading
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseContainer;
