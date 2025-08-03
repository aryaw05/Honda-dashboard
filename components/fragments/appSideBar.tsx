import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronUp, Plus, ChevronRight, Tag } from "lucide-react";
import Link from "next/link";
import CustomAvatar from "./avatar";
import { grotesk } from "@/lib/font";
const items = [
  {
    title: "Add Motor",
    url: "/dashboard/motors/add-data",
    icon: Plus,
  },
  {
    title: "Show Motor",
    url: "/dashboard/motors/show-data",
    icon: ChevronUp,
  },
  {
    title: "Category",
    url: "/dashboard/category",
    icon: Tag,
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
    <Sidebar className={grotesk.className}>
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg text-gray-400 ">
            Actions
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    className="text-2xl py-8 px-3 rounded-xl "
                  >
                    <div className="flex justify-between">
                      <Link href={item.url}>
                        <span>{item.title}</span>
                      </Link>
                      <span className="flex items-center bg-gray-200 rounded-lg p-2">
                        <item.icon size={20} />
                      </span>
                    </div>
                  </SidebarMenuButton>
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
                  <SidebarMenuButton
                    asChild
                    className="text-2xl py-8 px-3 rounded-xl"
                  >
                    <div className="flex justify-between">
                      <Link href={item.title}>
                        <span>{item.title}</span>
                      </Link>
                      <span className="flex items-center bg-gray-200 rounded-lg p-2">
                        <item.icon size={20} />
                      </span>
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
