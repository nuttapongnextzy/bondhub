"use client";

import BurgerMenu from "@/components/BurgerMenu";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { login } from "@/lib/data";
import { useRouter } from "next/navigation";
import LoginFormModal from "@/components/LoginFormModal";
import MyProfilebutton from "./MyProfileButton";

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
  };

  const handleLogout = async () => {
    Cookies.remove("token");
    checkAuth();
  };

  return (
    <header className="bg-gray-400 shadow-lg p-4">
      <div className="flex max-w-6xl mx-auto justify-between items-center">
        <Link href="/" className="">
          <h1 className="font-bold text-3xl">Nextzy - BondHub</h1>
        </Link>
        {isLoggedIn ? (
          <MyProfilebutton onLogout={handleLogout} />
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
