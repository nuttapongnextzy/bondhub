import BurgerMenu from "@/components/BurgerMenu";

function Page() {
  return (
    <div className="min-h-screen bg-gray-500">
      <header className="bg-gray-400 shadow-lg p-4">
        <div className="flex max-w-6xl mx-auto justify-between items-center">
          <h1 className="font-bold text-3xl">Nextzy - BondHub</h1>
          <BurgerMenu />
        </div>
      </header>
    </div>
  );
}

export default Page;
