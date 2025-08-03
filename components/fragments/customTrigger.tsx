"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar();
  return (
    <Button className="w-16 h-16" onClick={toggleSidebar} variant={"ghost"}>
      <Menu className="w-full size-8" />
    </Button>
  );
}
