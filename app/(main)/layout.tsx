import BurgerMenu from "@/components/BurgerMenu";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-gray-500">
      <header className="bg-gray-400 shadow-lg p-4">
        <div className="flex max-w-6xl mx-auto justify-between items-center">
          <Link href="/" className="">
            <h1 className="font-bold text-3xl">Nextzy - BondHub</h1>
          </Link>
          <BurgerMenu />
        </div>
      </header>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-500">
      <Header />
      <main>{children}</main>
    </div>
  );
}
