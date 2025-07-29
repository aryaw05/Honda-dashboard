"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Navbar } from "../../components/fragments/navbar";
import { AppSidebar } from "@/components/fragments/appSideBar";
import { useState } from "react";

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
        <main>
          {/* <CustomTrigger /> */}
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
