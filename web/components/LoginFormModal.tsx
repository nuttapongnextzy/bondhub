"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import { login } from "@/lib/data";

export default function LoginFormModal({ isOpen, onClose }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-md bg-gray-600 rounded-lg p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Log In</h2>
            <button className="text-2xl" onClick={onClose}>
              ×
            </button>
          </div>

          {/* Content */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

const UsernameInput = () => {
  return (
    <div className="mb-4">
      <label className="block text-gray-300 text-sm font-bold mb-2">
        Username
      </label>
      <input
        type="text"
        name="username"
        className="w-full border border-gray-300 rounded p-2"
        placeholder="Enter username..."
        required
        defaultValue={"nuttapong.p@nextzy.com"}
      />
    </div>
  );
};

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="">
      <label className="block text-gray-300 text-sm font-bold mb-2">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          className="w-full px-3 py-2 pr-10 border border-gray-300 rounded"
          placeholder="Enter password..."
          required
          defaultValue={"123456"}
        />
        <button
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    console.log("submit", { username, password });

    const token = await login(username?.toString() ?? "");
    Cookies.set("token", token, { expires: 1 });

    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <UsernameInput />
      <PasswordInput />
      <div className="text-right">
        <button
          type="submit"
          className="border-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded mt-10"
        >
          Login
        </button>
      </div>
    </form>
  );
};
