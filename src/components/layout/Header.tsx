import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@common/DropdownMenu";
import { Avatar, AvatarImage, AvatarFallback } from "@common/Avatar";
import { Input } from "@common/Input";
import { BellIcon, LogOutIcon, SearchIcon, SettingsIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-8 px-16 pt-6">
      <h1 className="text-2xl font-bold">Overview</h1>
      <Input
        label="Search"
        containerClassNames="max-w-sm"
        withIconAfter={true}
        IconAfter={<SearchIcon className="text-gray-500" />}
      />

      <div className="flex items-center gap-8">
        <Notifications />
        <SettingsIcon className="text-gray-400 hover:cursor-pointer" />
        <UserProfile />
      </div>
    </div>
  );
}

const UserProfile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[10rem] ">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex items-center gap-3 p-1">
            <LogOutIcon />
            <span>Logout</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center gap-3 p-1">
            <LogOutIcon />
            <span>Logout</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center gap-3 p-1">
            <LogOutIcon />
            <span>Logout</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Notifications = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="relative">
          <BellIcon className="text-gray-400" />
          <div className="absolute w-5 h-5 bg-blue-700 text-white text-xs flex justify-center items-center rounded-full -top-2 -right-2">
            1
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[10rem] ">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex items-center gap-3 p-1">
            <LogOutIcon />
            <span>Logout</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center gap-3 p-1">
            <LogOutIcon />
            <span>Logout</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center gap-3 p-1">
            <LogOutIcon />
            <span>Logout</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
