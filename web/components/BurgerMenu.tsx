"use client";

import { useState } from "react";
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

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "My Profile", href: "/my-profile/1", icon: User },
    { name: "Members", href: "/members", icon: Contact },
    { name: "Challenges", href: "/challenges", icon: Swords },
    // { name: "Games", href: "/games", icon: Gamepad },
    // { name: "Settings", href: "/settings", icon: Settings },
    // { name: "Logout", href: "/logout", icon: LogOut },
  ];

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="">
        <Menu className=""></Menu>
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-2 w-48 border">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <IconComponent className="w-4 h-4 text-gray-500" />
                <span className="text-gray-500"> {item.name}</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
