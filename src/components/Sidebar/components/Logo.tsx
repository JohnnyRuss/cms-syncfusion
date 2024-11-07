import { Link } from "react-router-dom";

import { useAppContext } from "@/contexts/useProviders";

import { ShopWare } from "@/components/Layouts/Icons";

const Logo: React.FC = () => {
  const { closeSidebarBasedOnWindowDimension } = useAppContext();

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeSidebarBasedOnWindowDimension();
  };

  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
    >
      <ShopWare />
      <span>Shoppy</span>
    </Link>
  );
};

export default Logo;
