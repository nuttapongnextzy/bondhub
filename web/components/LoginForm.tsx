"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    console.log("submit", { username, password });

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

export default LoginForm;
