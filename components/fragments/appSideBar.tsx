"use client";

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
import { getCategories } from "@/app/api/category/page";
import useSWR from "swr";
import { CategoryType } from "@/lib/types/category";
import { getUser, logout } from "@/app/api/users/auth";
import { Button } from "../ui/button";
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

export function AppSidebar() {
  // alias destructuring data: categories
  const { data: categoryData, isLoading: categoryIsLoading } = useSWR(
    "categories",
    getCategories
  );

  const { data: userData, isLoading: userDataIsLoading } = useSWR(
    "user",
    getUser
  );

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
                    className="text-xl py-8 px-3 rounded-xl "
                  >
                    <div className="flex justify-between">
                      <Link href={item.url}>
                        <span>{item.title}</span>
                      </Link>
                      <span className="flex items-center bg-gray-200 rounded-lg p-2 bg-linear-65 from-red-300 to-red-600 text-white">
                        <item.icon size={15} />
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
              {categoryData &&
                categoryData.data.map((item: CategoryType, index: number) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton
                      asChild
                      className="text-xl py-8 px-3 rounded-xl"
                    >
                      <div className="flex justify-between">
                        <Link href={item.nama_kategori}>
                          <span>{item.nama_kategori}</span>
                        </Link>
                        <span className="flex items-center bg-gray-200 rounded-lg p-2 bg-linear-65 from-red-300 to-red-600 text-white">
                          <ChevronRight size={15} />
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
                  {userData && <span>{userData.data.username}</span>}

                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="">
                <DropdownMenuItem>
                  <Button
                    onClick={async (e) => {
                      e.preventDefault();
                      await logout();
                      window.location.reload(); 
                    }}
                  >
                    Logout
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
