import { Outlet } from "react-router";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Header Section */}
      <header className="w-full border-b bg-white shadow-md">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
