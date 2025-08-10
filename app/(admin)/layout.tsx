"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/fragments/appSideBar";
import { useState } from "react";
import { CustomTrigger } from "@/components/fragments/customTrigger";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <AppSidebar />
        <div className="w-full">
          <div className="md:hidden">
            <CustomTrigger />
          </div>
          <div className=" mt-5  px-8 py-10 h-fit w-full">{children}</div>
        </div>
      </SidebarProvider>
    </>
  );
}
