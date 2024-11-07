import { NavLink } from "react-router-dom";

import { useAppContext } from "@/contexts/useProviders";
import { SidebarLinkT } from "@/types/data.types";

type SidebarNavBlockT = {
  linkBlock: SidebarLinkT;
};

const SidebarNavBlock: React.FC<SidebarNavBlockT> = ({ linkBlock }) => {
  const { closeSidebarBasedOnWindowDimension, currentColor } = useAppContext();
  const onClick = () => closeSidebarBasedOnWindowDimension();

  return (
    <div>
      <p className="text-gray-400 m-3 mt-4 uppercase">{linkBlock.title}</p>

      {linkBlock.links.map((link) => (
        <NavLink
          key={link.name}
          to={`/${link.name}`}
          onClick={onClick}
          style={({ isActive }) => ({
            backgroundColor: isActive ? currentColor : "",
          })}
          className={({ isActive }) =>
            `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md m-2 ${
              isActive
                ? "text-white"
                : "text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray"
            }`
          }
        >
          {link.icon}
          <span className="capitalize">{link.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarNavBlock;
