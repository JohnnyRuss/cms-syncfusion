import { links } from "@/data/dummy";
import { useAppContext } from "@/contexts/useProviders";

import { Header, SidebarNavBlock } from "./components";

type SidebarT = {};

const Sidebar: React.FC<SidebarT> = () => {
  const { activeSidebar } = useAppContext();

  return activeSidebar ? (
    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
      <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        {activeSidebar && (
          <>
            <Header />

            <div className="mt-10">
              {links.map((linkBlock) => (
                <SidebarNavBlock key={linkBlock.title} linkBlock={linkBlock} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  ) : (
    <div className="w-0 dark:bg-secondary-dark-bg">sidebar w-0</div>
  );
};

export default Sidebar;
