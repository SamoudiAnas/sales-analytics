import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import SidebarItem from "@/components/sidebar/SidebarItem";
import { Search, SearchIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-sm m-32">
      <Input
        label="LAbel"
        withIconAfter={true}
        IconAfter={<Search className="text-gray-500" />}
      />
      <Button
        withIcon={true}
        Icon={<Search className="text-white" />}
        className="mt-8"
      >
        Button
      </Button>

      <SidebarItem name="Overview" link="/" Icon={SearchIcon} />
    </main>
  );
}
