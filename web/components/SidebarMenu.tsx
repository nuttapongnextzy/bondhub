"use client";

import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  User,
  LogOut,
  Settings,
  Contact,
  Swords,
  Gamepad,
} from "lucide-react";

const menuItems = [
  { name: "Home", href: "/home", icon: Home },
  { name: "Members", href: "/members", icon: Contact },
  { name: "Challenges", href: "/challenges", icon: Swords },
  // { name: "My Profile", href: "/my-profile/1", icon: User },
  // { name: "Games", href: "/games", icon: Gamepad },
  // { name: "Settings", href: "/settings", icon: Settings },
  // { name: "Logout", href: "/logout", icon: LogOut },
];

export default function SidebarMenu() {
  const pathName = usePathname();

  return (
    <aside className="w-64 bg-gray-500 p-4 overflow-y-auto">
      <nav className="space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathName === item.href;
          return (
            <a
              key={index}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-gray-200 text-gray-900 font-bold"
                  : "hover:bg-gray-400 text-gray-300"
              }`}
            >
              <Icon className="w-5 h-5 text-gray-900" />
              <span className="text-gray-900 font-bold">{item.name}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
