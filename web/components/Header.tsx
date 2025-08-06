"use client";

import BurgerMenu from "@/components/BurgerMenu";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { login } from "@/lib/data";
import { useRouter } from "next/navigation";
import LoginFormModal from "@/components/LoginFormModal";

export default function Header() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
    console.log("check auth");
  };

  const handleLogin = async () => {
    setIsModalOpen(true);
    // const token = await login("nuttapong.p@nextzy.com");
    // Cookies.set("token", token, { expires: 1 });
    // setIsLoggedIn(!!Cookies.get("token"));
  };

  const handleLogout = async () => {
    Cookies.remove("token");
    setIsLoggedIn(!!Cookies.get("token"));
  };

  return (
    <header className="bg-gray-400 shadow-lg p-4">
      <div className="flex max-w-6xl mx-auto justify-between items-center">
        <Link href="/" className="">
          <h1 className="font-bold text-3xl">Nextzy - BondHub</h1>
        </Link>
        {isLoggedIn ? (
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
        <LoginFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </header>
  );
}
