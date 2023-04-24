import { TokensIcon } from "@radix-ui/react-icons";
import {
  CalendarIcon,
  LandmarkIcon,
  ShoppingBagIcon,
  TableIcon,
} from "lucide-react";
import { PhoneCall } from "lucide-react";
import { MdOutlineLeaderboard } from "react-icons/md";

type SidebarItem = {
  link: string;
  name: string;
  Icon: React.ElementType;
  textAfter?: string;
  hasChildren?: boolean;
  navChildren?: {
    link: string;
    name: string;
    Icon: React.ElementType;
    textAfter?: string;
  }[];
};

export const sidebarElements: SidebarItem[] = [
  {
    name: "Overview",
    link: "/",
    Icon: TokensIcon,
  },
  {
    name: "Leaderboard",
    link: "/leaderboard",
    Icon: MdOutlineLeaderboard,
  },
  {
    name: "Spreadsheets",
    link: "/spreadsheets",
    Icon: TableIcon,
  },
  {
    name: "Administration",
    link: "/administration",
    Icon: LandmarkIcon,
  },
  {
    name: "Sales",
    link: "/sales",
    hasChildren: true,
    Icon: ShoppingBagIcon,
    navChildren: [
      {
        name: "Overview",
        link: "/",
        Icon: TokensIcon,
      },
      {
        name: "Overview",
        link: "/",
        Icon: TokensIcon,
      },

      {
        name: "Overview",
        link: "/",
        Icon: TokensIcon,
      },
    ],
  },

  {
    name: "Schedule",
    link: "/schedule",
    Icon: CalendarIcon,
  },
];

export const sidebarSecondaryElements: SidebarItem[] = [
  {
    name: "Support",
    link: "/",
    Icon: PhoneCall,
  },
];
