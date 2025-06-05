import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Developed by <a href="https://github.com/SuryaNarayananDev" className="text-yellow-400" target="_blank" rel="noopener noreferrer">Suryanarayanan S</a>
      </div>
    </div>
  );
};

export default AppLayout;
