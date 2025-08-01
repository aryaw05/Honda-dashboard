import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronUp, Plus, ChevronRight } from "lucide-react";
import Link from "next/link";
import CustomAvatar from "./avatar";

const items = [
  {
    title: "Add Motorcycle",
    url: "/",
  },
];

const category = [
  {
    title: "Matic",
    icon: ChevronRight,
  },
  {
    title: "Sport",
    icon: ChevronRight,
  },
  {
    title: "Moped",
    icon: ChevronRight,
  },
  {
    title: "Sport Naked",
    icon: ChevronRight,
  },
];
export function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg text-gray-400 ">
            Actions
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild className="text-xl py-5">
                    <div className="flex justify-between">
                      <Link href={item.url}>
                        <span>{item.title}</span>
                      </Link>
                    </div>
                  </SidebarMenuButton>
                  <SidebarMenuAction>
                    <Plus />
                    <span className="sr-only">Add Project</span>
                  </SidebarMenuAction>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg text-gray-400">
            Category
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-5">
              {category.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild className="text-xl py-5">
                    <div className="flex justify-between">
                      <Link href={item.title}>
                        <span>{item.title}</span>
                      </Link>
                      <item.icon size={80} />
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex justify-between" size={"lg"}>
                  <CustomAvatar
                    image={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNd1pQoLFlD5F2Z1cS13DXlMaJ7Z34eizY7ZDjMGwe4su-IJuMJAScRfQfEX0mGKCa-jw&usqp=CAU"
                    }
                  />
                  Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
