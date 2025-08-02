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
        <div className="overflow-hidden mt-10  px-8 py-5 w-full">
          {children}
        </div>
        <div className="md:hidden">
          <CustomTrigger />
        </div>
      </SidebarProvider>
    </>
  );
}
