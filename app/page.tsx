"use client";

import { redirect } from "next/navigation";
import Dashboard from "./(admin)/dashboard/motors/show-data/page";

export default function Home() {
  redirect("/dashboard/motors/show-data");
}
