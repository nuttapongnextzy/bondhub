import BurgerMenu from "@/components/BurgerMenu";
import Link from "next/link";
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

function Header() {
  return (
    <header className="bg-gray-400 shadow-lg p-4">
      <div className="flex max-w-6xl mx-auto justify-between items-center">
        <Link href="/" className="">
          <h1 className="font-bold text-3xl">Nextzy - BondHub</h1>
        </Link>
        <BurgerMenu />
      </div>
    </header>
  );
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = [
    { name: "Members", href: "/members", icon: Contact },
    { name: "Challenges", href: "/challenges", icon: Swords },
    { name: "My Profile", href: "/my-profile/1", icon: User },
    // { name: "Games", href: "/games", icon: Gamepad },
    // { name: "Settings", href: "/settings", icon: Settings },
    // { name: "Logout", href: "/logout", icon: LogOut },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-500 flex flex-col">
      {/* Header */}
      <Header />

      {/* Sidebar + Main */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-500 p-4 overflow-y-auto">
          <nav className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg"
                >
                  <Icon className="w-4 h-4 text-black" />
                  <span className="text-black">{item.name}</span>
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-600">
          {children}
        </main>
      </div>
    </div>
  );
}
