import BurgerMenu from "@/components/BurgerMenu";
import SidebarMenu from "@/components/SidebarMenu";
import Link from "next/link";

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
  return (
    <div className="min-h-screen w-full bg-gray-500 flex flex-col">
      {/* Header */}
      <Header />

      {/* Sidebar + Main */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <SidebarMenu />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-600">
          {children}
        </main>
      </div>
    </div>
  );
}
