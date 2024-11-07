import "./spinner.css";
import { useAppContext } from "@/contexts/useProviders";

const Spinner: React.FC = () => {
  const { currentColor } = useAppContext();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-[99999] backdrop-blur-sm scroll-block">
      <div className="loader" style={{ background: currentColor }} />
    </div>
  );
};

export default Spinner;
