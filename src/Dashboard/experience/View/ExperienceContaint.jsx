import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ExperienceContaint() {
  const navigate = useNavigate();

  const [experiences, setExperiences] = useState([
    {
      id: 1,
      poste: "Développeur Full-Stack",
      entreprise: "TechCorp",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
      description:
        "Développement d'applications web responsives avec React et Node.js. Collaboration avec l’équipe design et QA.",
      dateDebut: "Jan 2022",
      dateFin: "Déc 2023",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      poste: "Frontend Developer",
      entreprise: "DesignStudio",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      description:
        "Création d’interfaces modernes et intuitives. Optimisation des performances UI.",
      dateDebut: "Mars 2020",
      dateFin: "Déc 2021",
      skills: ["Vue.js", "Tailwind CSS", "Figma"],
    },
  ]);

  const handleDelete = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  return (
    // <div className="flex flex-col items-center min-h-screen p-6 bg-gray-50">
    // </div>
      <div className="w-full max-w-5xl p-6 bg-white shadow-md rounded-2xl">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Professionnal Experiences
          </h2>
          <button
            onClick={() => navigate("/add/experience")}
            className="flex items-center gap-2 px-4 py-2 text-white bg-pink-600 rounded-lg shadow hover:bg-pink-700"
          >
            <FaPlus /> Add experience
          </button>
        </div>

        {/* LISTE */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 transition border shadow-sm rounded-xl hover:shadow-lg bg-gray-50"
            >
              <div className="flex items-start gap-4">
                {/* LOGO ENTREPRISE */}
                <img
                  src={exp.logo}
                  alt={exp.entreprise}
                  className="object-contain w-16 h-16"
                />

                <div className="flex-1">
                  {/* Poste & Entreprise */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {exp.poste}
                      </h3>
                      <p className="text-gray-500">{exp.entreprise}</p>
                      <p className="text-sm text-gray-400">
                        {exp.dateDebut} - {exp.dateFin}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate(`/experience/edit/${exp.id}`)}
                        className="flex items-center gap-1 px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(exp.id)}
                        className="flex items-center gap-1 px-3 py-1 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700"
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-600">{exp.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
