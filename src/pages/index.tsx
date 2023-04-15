import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import SidebarLayout from "@/components/layout/SidebarLayout";
import SidebarItem from "@/components/sidebar/SidebarItem";
import { Search, SearchIcon } from "lucide-react";

export default function Home() {
  return (
    <SidebarLayout>
      <main className="max-w-sm m-32">
        <Input
          containerClassNames="max-w-lg"
          label="LAbel"
          withIconAfter={true}
          IconAfter={Search}
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
    </SidebarLayout>
  );
}
