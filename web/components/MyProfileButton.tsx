import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MyProfilebutton({ onLogout }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleMenuClick = (action: string, href?: string) => {
    setIsOpen(false); // ปิด dropdown ก่อน

    if (action === "profile") {
      router.push("/my-profile/1");
    } else if (action === "logout") {
      onLogout();
      //   router.push("/");
    }
  };

  const menuItems = [
    {
      name: "My Profile",
      href: "/my-profile/1",
      onClick: () => handleMenuClick("profile"),
    },
    {
      name: "Log Out",
      href: "/members",
      onClick: () => handleMenuClick("logout"),
    },
  ];

  return (
    <div className="relative">
      {/* Profile Button */}
      <button
        className="bg-blue-500 w-10 h-10 rounded-full hover:bg-blue-400 font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        Me
      </button>

      {/* Backdrop */}
      {/* {isOpen && (
        <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
      )} */}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-2 w-48 border">
          {menuItems.map((item, index) => {
            return (
              <a
                key={index}
                href={item.href}
                // onClick={() => setIsOpen(false)}
                onClick={item.onClick}
                className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <span className="text-gray-500"> {item.name}</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
