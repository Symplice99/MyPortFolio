import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaGraduationCap } from "react-icons/fa";


export default function Sidebar() {
  return (
    // 
    <>
      <div className="flex items-center gap-3 mx-5 mt-5">
        <img
          src="https://randomuser.me/api/portraits/women/45.jpg"
          alt="User"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="font-semibold">Sarah Connor</h2>
          <p className="text-sm text-gray-500">uxlead@gmail.com</p>
        </div>
      </div>
      <h2 className="mx-5 mt-5 mb-8 text-2xl font-bold text-gray-800">My Portfolio</h2>
      <nav className="mx-5 space-y-4 font-medium text-gray-700">
        
          <Link to="/aboutedit" className="flex items-center gap-3 cursor-pointer hover:text-pink-600">
            <FaUser className="text-lg" /> About
          </Link>
        
        <Link to="/skill" className="flex items-center gap-3 cursor-pointer hover:text-pink-600">
          <FaCode className="text-lg" /> Skills
        </Link>
        
          <Link to="/experience" className="flex items-center gap-3 cursor-pointer hover:text-pink-600">
            <FaBriefcase className="text-lg" /> Experiences
          </Link>
        
        <Link to="/projets" className="flex items-center gap-3 cursor-pointer hover:text-pink-600">
          <FaProjectDiagram className="text-lg" /> Projects
        </Link>
        <Link to="/educations" className="flex items-center gap-3 cursor-pointer hover:text-pink-600">
          <FaGraduationCap className="text-lg" /> Educations
        </Link>
      </nav>
    </>
  );
}
