import { useAppContext } from "@/contexts/useProviders";

type HeaderT = {
  category: "Page" | "App" | "Chart";
  title: string;
  themeBase?: boolean;
};

const Header: React.FC<HeaderT> = ({ category, title, themeBase = false }) => {
  const { currentMode } = useAppContext();

  return (
    <div className="mb-10 ">
      <p className="text-gray-400">{category}</p>
      <p
        style={{
          color: !themeBase || currentMode === "LIGHT" ? "#0f172a" : "#fff",
        }}
        className="text-3xl font-extrabold tracking-tight"
      >
        {title}
      </p>
    </div>
  );
};

export default Header;
