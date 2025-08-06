"use client";

import BurgerMenu from "@/components/BurgerMenu";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { login } from "@/lib/data";

export default function Header() {
  const [isLogIn, setIsLogIn] = useState(false);

  const handleLogin = async () => {
    const token = await login("nuttapong.p@nextzy.com");
    Cookies.set("token", token, { expires: 1 });
    setIsLogIn(!!Cookies.get("token"));
  };

  const handleLogout = async () => {
    Cookies.remove("token");
    setIsLogIn(!!Cookies.get("token"));
  };

  return (
    <header className="bg-gray-400 shadow-lg p-4">
      <div className="flex max-w-6xl mx-auto justify-between items-center">
        <Link href="/" className="">
          <h1 className="font-bold text-3xl">Nextzy - BondHub</h1>
        </Link>
        {isLogIn ? (
          <button
            className="bg-blue-500 w-10 h-10 rounded-full hover:bg-blue-400 font-bold"
            onClick={handleLogout}
          >
            Log out
          </button>
        ) : (
          <button
            className="bg-blue-500 px-3 py-2 rounded hover:bg-blue-400 font-bold"
            onClick={handleLogin}
          >
            Log In
          </button>
        )}

        {/* <BurgerMenu /> */}
      </div>
    </header>
  );
}
