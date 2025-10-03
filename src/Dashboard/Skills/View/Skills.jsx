import React, { useState } from "react";
import Sidebar from "../../SideBar/SideBar";
import Header from "../../Header/Header";
import Contain from "./SkillsContaint";
import { FaTimes } from "react-icons/fa";

export default function Main() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar desktop */}
      <aside className="fixed top-0 left-0 z-20 hidden w-64 h-screen bg-white shadow-lg md:block">
        <Sidebar />
      </aside>

      {/* Sidebar mobile */}
      {sidebarOpen && (
        <>
          {/* Overlay noir */}
          <div
            className="fixed inset-0 z-20 bg-black bg-opacity-40"
            onClick={() => setSidebarOpen(false)}
          ></div>

          {/* Sidebar mobile */}
          <div className="fixed top-0 left-0 z-30 w-64 h-full transition-transform duration-300 transform translate-x-0 bg-white shadow-lg">
            {/* Bouton de fermeture */}
            <div className="flex justify-end p-4">
              <button
                className="text-gray-700 hover:text-black"
                onClick={() => setSidebarOpen(false)}
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <Sidebar />
          </div>
        </>
      )}

      {/* Wrapper principal */}
      <div className="flex flex-col flex-1 md:ml-64">
        {/* Header fixé */}
        <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between h-16 px-6 bg-white shadow-md md:left-64">
          <Header onMenuClick={() => setSidebarOpen(true)} />
        </header>

        {/* Contenu scrollable */}
        <main className="flex-1 p-6 mt-16 overflow-y-auto">
          <Contain />
        </main>
      </div>
    </div>
  );
}
