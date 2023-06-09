import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@common/Select";
import SidebarLayout from "@/layouts/SidebarLayout";

export default function Home() {
  return (
    <SidebarLayout>
      <main className="max-w-sm m-32">
        <Select>
          <SelectTrigger label="Show:" className="">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </main>
    </SidebarLayout>
  );
}
