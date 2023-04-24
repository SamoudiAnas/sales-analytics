import clsx from "clsx";
import React from "react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@common/Accordion";

interface SidebarItemProps {
  link: string;
  name: string;
  Icon: React.ElementType;
  hasChildren?: boolean;
  navChildren?: { link: string; name: string; Icon: React.ElementType }[];
}

const SidebarItem = ({
  name,
  link,
  Icon,
  hasChildren = false,
  navChildren,
}: SidebarItemProps) => {
  //@TODO: add proper active link logic
  const isActive = true;

  if (!hasChildren) {
    return <NavItem name={name} link={link} Icon={Icon} />;
  }

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className={clsx("border-none ")}>
        <AccordionTrigger
          className={clsx(
            "relative hover:no-underline px-4 pl-6 !py-3 font-semibold hover:bg-gray-200 rounded-r-2xl",
            { "text-blue-600": isActive },
            "before:absolute before:left-0 before:top-0 before:bottom-0 before:bg-blue-600 before:w-1 before:rounded-r-md"
          )}
        >
          <div className="flex !justify-start gap-3">
            <Icon className="text-grey w-6 h-6" />
            <span>{name}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-4">
          {navChildren?.map((navChild, idx) => (
            <NavItem
              key={idx}
              name={navChild.name}
              link={navChild.link}
              Icon={navChild.Icon}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SidebarItem;

interface NavItemProps {
  link: string;
  name: string;
  Icon: React.ElementType;
}

const NavItem = ({ name, link, Icon }: NavItemProps) => {
  const isActive = false;

  return (
    <Link
      href={link}
      className={clsx(
        { "text-blue-600": isActive },
        "flex items-center gap-3 py-3 px-5 rounded-r-2xl hover:bg-gray-100 w-full",
        "relative hover:no-underline px-4 pl-6 py-3 font-semibold hover:bg-gray-200 rounded-r-2xl",
        "hover:before:absolute hover:before:left-0 hover:before:top-0 hover:before:bottom-0 hover:before:bg-blue-600 hover:before:w-1 hover:before:rounded-r-md",
        {
          "before:absolute before:left-0 before:top-0 before:bottom-0 before:bg-blue-600 before:w-1 before:rounded-r-md":
            isActive,
        }
      )}
    >
      <Icon
        className={clsx("text-grey w-6 h-6", { "text-blue-600": isActive })}
      />
      <p
        className={clsx(
          { "text-blue-600": isActive },
          "font-semibold text-base"
        )}
      >
        {name}
      </p>
    </Link>
  );
};
