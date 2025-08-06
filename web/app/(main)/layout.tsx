import SidebarMenu from "@/components/SidebarMenu";
import Header from "@/components/Header";
import LoginFormModal from "@/components/LoginFormModal";

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
