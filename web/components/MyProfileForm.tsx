"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Profile } from "@/lib/definitions";
import { updateUser } from "@/lib/data";

const Input = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-300 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type="text"
        name={label}
        defaultValue={value}
        className="w-full border border-gray-300 rounded p-2"
        // placeholder={`Enter ${label}...`}
      />
    </div>
  );
};

const TextareaInput = ({
  label,
  value,
  rows,
}: {
  label: string;
  value: string;
  rows: number;
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-300 text-sm font-bold mb-2">
        {label}
      </label>
      <textarea
        id={label}
        name={label}
        defaultValue={value}
        rows={rows}
        className="w-full border border-gray-300 rounded p-2"
        // placeholder={`Enter ${label}...`}
      />
    </div>
  );
};

export const MyProfileForm = ({ profile }: { profile: Profile }) => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedData = {
      firstName: formData.get("First Name") as string,
      lastName: formData.get("Last Name") as string,
      nickname: formData.get("Nickname") as string,
      bio: formData.get("Bio") as string,
      status: formData.get("Status") as string,
    };

    updateUser(profile.id, updatedData);

    console.log("submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="font-bold text-lg">{profile?.email}</p>
      <div className="border-t-2 border-gray-400 my-4"></div>
      <Input label={"First Name"} value={profile?.firstName} />
      <Input label={"Last Name"} value={profile?.lastName} />
      <Input label={"Nickname"} value={profile?.nickname} />
      <TextareaInput label={"Bio"} value={profile?.bio} rows={4} />
      <TextareaInput label={"Status"} value={profile?.status} rows={2} />
      <div className="text-center">
        <button
          type="submit"
          className="border-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded mt-10"
        >
          Update
        </button>
      </div>
    </form>
  );
};
