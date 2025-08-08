"use client";

import BurgerMenu from "@/components/BurgerMenu";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { login } from "@/lib/data";
import { useRouter } from "next/navigation";
import LoginFormModal from "@/components/LoginFormModal";
import MyProfileButton from "./MyProfileButton";
import { jwtDecode } from "jwt-decode";
import { Profile } from "@/lib/definitions";
import { profile } from "console";

type JwtPayload = {
  sub?: string;
  email?: string;
};

export default function Header() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    console.log("check auth");

    const token = Cookies.get("token");

    if (token) {
      const decode: JwtPayload = jwtDecode(token);
      console.log(`decode`, decode);

      const profile: Profile = {
        id: decode.sub ?? "",
        email: decode?.email ?? "",
        firstName: "",
        lastName: "",
        nickname: "",
        bio: "",
        status: "",
        profileImage: "",
      };

      setProfile(profile);

      console.log(`profile`, profile);

      Cookies.set("user", JSON.stringify(profile), { expires: 1 });

      console.log(`cookie user`, Cookies.get("user"));
    }

    setIsLoggedIn(!!token);
  };

  const handleLogin = async () => {
    setIsModalOpen(true);
  };

  const handleLogout = async () => {
    Cookies.remove("token");
    Cookies.remove("user");
    checkAuth();
  };

  return (
    <header className="bg-gray-400 shadow-lg p-4">
      <div className="flex max-w-6xl mx-auto justify-between items-center">
        <Link href="/" className="">
          <h1 className="font-bold text-3xl">Nextzy - BondHub</h1>
        </Link>
        {profile ? (
          <MyProfileButton user={profile} onLogout={handleLogout} />
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
