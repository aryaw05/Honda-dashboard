"use client";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <button className="rounded-lg px-4 " onClick={() => signOut()}>
        <h1>logout</h1>

        <h2>{session?.user?.name}</h2>
      </button>
      <h1>arya </h1>
    </div>
  );
}
