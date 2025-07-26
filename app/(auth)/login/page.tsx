"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import useActionForm from "@/app/hooks/useActionForm";

import Cookies from "js-cookie";

export default function LoginPage(e) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const { formData, handleChange } = useActionForm();

  console.log(formData);

  const SubmitLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/api/users/login`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (!result.errors) {
        push(callbackUrl);
        Cookies.set("token", result.data.token);
        console.log(result);

        setIsLoading(false);
      } else {
        setIsError(true);
        setTimeout(() => setIsError(false), 2000);
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };
  return (
    <div className="mx-10 flex h-screen flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center md:w-1/3">
        <div>
          <h1 className={` text- center text-5xl`}>LOGIN</h1>
          {isError && (
            <p className="text-red-500">Email or password is wrong </p>
          )}
        </div>
        <form
          className={` flex w-full flex-col items-center justify-center gap-7`}
          onSubmit={(e) => SubmitLogin(e)}
        >
          <div className="w-full">
            <label htmlFor="" className="font-bold">
              Username
            </label>
            <input
              type="text"
              required
              onChange={handleChange}
              placeholder="johndoe@gmail"
              name="username"
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
              required
              placeholder="********"
              onChange={handleChange}
              name="password"
              className="w-full appearance-none p-5 focus:outline-none active:border-0"
            />
            <hr className="w-full border-2 border-black" />
          </div>
          <div className="flex w-full flex-col gap-3">
            <button
              disabled={isLoading}
              type="submit"
              className="w-full bg-black p-3 text-white"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
