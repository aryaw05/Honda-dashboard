"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar();
  return <Menu size={40} onClick={toggleSidebar} />;
}
