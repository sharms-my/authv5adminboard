import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  LayoutDashboard,
  CreditCard,
  Settings,
  User,
  Users,
  CirclePlay,
  BookPlus,
  Table,
  BarChartBig,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../img/dark_adminboard.png";

const Sidebar = () => {
  return (
    <>
      <aside className="p-5">
        <div className="grayscale">
          <Link href="/">
            <Image
              className="filter grayscale"
              src={logo}
              alt="admin-logo"
              width={280}
            ></Image>
          </Link>
        </div>
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <Command className="mt-5 rounded-none bg-transparent text-white">
            <CommandList>
              <CommandGroup heading="">
                <CommandItem>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <Link href="/">Dashboard</Link>
                </CommandItem>
                <CommandItem>
                  <Users className="mr-2 h-4 w-4" />
                  <Link href="/users">Manage Users</Link>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />

              <CommandGroup heading="Components">
                <CommandItem>
                  <BarChartBig className="mr-2 h-4 w-4" />
                  <span>Charts</span>
                </CommandItem>
                <CommandItem>
                  <Table className="mr-2 h-4 w-4" />
                  <span>Tables</span>
                </CommandItem>
                <CommandItem>
                  <BookPlus className="mr-2 h-4 w-4" />
                  <span>Forms</span>
                </CommandItem>
                <CommandItem>
                  <CirclePlay className="mr-2 h-4 w-4" />
                  <span>Buttons</span>
                </CommandItem>
              </CommandGroup>

              <CommandGroup heading="Settings">
                <CommandItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
