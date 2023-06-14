import LogoIcon from "@icons/logo.svg";
import Link from "next/link";
import SidebarItem from "./SidebarItem";
import {
  sidebarElements,
  sidebarSecondaryElements,
} from "@/constants/sidebarElement";
import clsx from "clsx";
import { MessageCircle } from "lucide-react";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Button } from "@common/Button";

const Sidebar = () => {
  return (
    <div className="w-64 h-full min-h-screen bg-white flex flex-col">
      <div className="flex items-center gap-4 pl-6 pt-8 mb-16">
        <LogoIcon className="w-8 h-8" />
        <h1 className="text-blue-800 text-xl font-semibold">Sales Analytics</h1>
      </div>

      <div className="flex flex-grow flex-col gap-2">
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

        <h2 className="pl-6 font-bold text-sm text-grey capitalize tracking-wider mt-8 mb-4">
          TEAMS
        </h2>

        <Link
          href="/messages"
          className={clsx(
            { "text-blue-600": false },
            "flex items-center gap-3 py-3 px-5 rounded-r-2xl hover:bg-gray-100 w-full",
            "relative hover:no-underline px-4 pl-6 py-3 font-semibold hover:bg-gray-200 rounded-r-2xl",
            "hover:before:absolute hover:before:left-0 hover:before:top-0 hover:before:bottom-0 hover:before:bg-blue-600 hover:before:w-1 hover:before:rounded-r-md",
            {
              "before:absolute before:left-0 before:top-0 before:bottom-0 before:bg-blue-600 before:w-1 before:rounded-r-md":
                false,
            }
          )}
        >
          <MessageCircle
            className={clsx("text-grey w-6 h-6", { "text-blue-600": false })}
          />
          <div className="flex justify-between flex-grow">
            <p
              className={clsx(
                { "text-blue-600": false },
                "font-semibold text-base"
              )}
            >
              Messages
            </p>
            <span className="w-6 h-6 rounded-full bg-red-600 text-white flex text-sm justify-center items-center">
              9
            </span>
          </div>
        </Link>
        {sidebarSecondaryElements.map((sidebarElement, idx) => (
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
      <div className="rounded-[2rem] bg-mainblue bg-opacity-5 p-6 pt-12 flex flex-col gap-8 justify-center items-center relative mx-2 mb-4 mt-10">
        <div className="w-12 h-12 rounded-2xl bg-mainblue flex justify-center items-center absolute -top-6">
          <ArrowUpIcon className="text-white w-6 h-6" />
        </div>
        <p className="text-center px-2">
          Upgrade to <strong>Pro</strong> for more resources
        </p>
        <Button className="w-full !rounded-2xl">Upgrade</Button>
      </div>
    </div>
  );
};

export default Sidebar;
