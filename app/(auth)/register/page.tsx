"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const SubmitRegister = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
      {
        method: "POST",
        body: JSON.stringify({
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      }
    );
    if (res.ok) {
      push("/login");
      setIsLoading(false);
      console.log(res);
    } else {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <div className="mx-10 flex h-screen flex-col items-center justify-center gap-10">
      <h1 className={` text- center text-5xl`}>REGISTER</h1>
      {isError && <p className="text-red-500">Email already exists</p>}
      <form
        action=""
        className={` flex w-full flex-col items-center justify-center gap-8`}
        onSubmit={(e) => SubmitRegister(e)}
      >
        <div className="w-full">
          <label htmlFor="" className="font-bold">
            Username
          </label>

          <input
            type="text"
            placeholder="John Doe"
            name="username"
            className="w-full p-5 after:appearance-none focus:outline-none active:border-0"
          />
          <hr className="w-full border-2 border-black" />
        </div>

        <div className="w-full">
          <label htmlFor="" className="font-bold">
            Email
          </label>

          <input
            type="email"
            placeholder="johndoe@gmail.com"
            name="email"
            className="w-full p-5 after:appearance-none focus:outline-none active:border-0"
          />
          <hr className="w-full border-2 border-black" />
        </div>
        <div className="w-full">
          <label htmlFor="" className="font-bold">
            Password
          </label>

          <input
            type="password"
            placeholder="********"
            name="password"
            className="after:appearance w-full p-5 focus:outline-none active:border-0"
          />
          <hr className="w-full border-2 border-black" />
        </div>
        <div className="flex w-full flex-col gap-3">
          <button
            disabled={isLoading}
            type="submit"
            className="w-full bg-black p-3 text-white"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
          <h2>
            Have an account?
            <Link href={"/login"} className="font-bold">
              Login !
            </Link>
          </h2>
        </div>
      </form>
    </div>
  );
}
