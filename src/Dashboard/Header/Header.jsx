import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header({ onMenuClick }) {
  return (
    // <header className="flex items-center justify-between">
    // </header>
    <>
      {/* Bouton hamburger visible uniquement en mobile */}
      <button
        className="p-2 text-white bg-gray-800 rounded-lg md:hidden hover:bg-gray-700"
        onClick={onMenuClick}
      >
        <FaBars className="text-xl" />
      </button>

      <div>
        <h1 className="text-2xl font-bold">Hello, Sara 👋</h1>
        <p className="text-gray-500">Tuesday, 26 October 2021</p>
      </div>

      <Link to="/add/projets" className="hidden px-4 py-2 text-white bg-black rounded-lg shadow sm:block">
        + Add New Project
      </Link>
    </>
  );
}
