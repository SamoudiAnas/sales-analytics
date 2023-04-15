import LogoIcon from "@icons/logo.svg";

import SidebarItem from "./SidebarItem";
import { sidebarElements } from "@/constants/sidebarElement";

const Sidebar = () => {
  return (
    <div className="w-64 h-full min-h-screen bg-white flex flex-col">
      <div className="flex items-center gap-4 pl-6 pt-8 mb-16">
        <LogoIcon className="w-8 h-8" />
        <h1 className="text-blue-800 text-xl font-semibold">Sales Analytics</h1>
      </div>

      <div className="flex flex-col gap-3">
        {sidebarElements.map((sidebarElement, idx) => (
          <SidebarItem
            key={idx}
            name={sidebarElement.name}
            link={sidebarElement.link}
            Icon={sidebarElement.Icon}
            hasChildren={sidebarElement.hasChildren}
            navChildren={sidebarElement.navChildren}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
