import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import imagepro1 from "../../../assets/work_logo/image_search.png"
import imagepro2 from "../../../assets/work_logo/movie_rec.png"

export default function Projects() {
  const navigate = useNavigate();

  const [projets, setProjets] = useState([
    {
      id: 1,
      titre: "Portfolio Personnel",
      image: imagepro1,
      description:
        "Création d’un portfolio personnel pour présenter mes projets, avec React et Tailwind CSS.",
      skills: ["React", "Tailwind CSS", "Netlify"],
    },
    {
      id: 2,
      titre: "Application de Chat Temps Réel",
      image: imagepro2,
      description:
        "Développement d’une application de messagerie instantanée avec Socket.io et Node.js.",
      skills: ["React", "Node.js", "Socket.io"],
    },
  ]);

  const handleDelete = (id) => {
    setProjets(projets.filter((pro) => pro.id !== id));
  };

  return (
    <div className="w-full max-w-5xl p-6 bg-white shadow-md rounded-2xl">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">My Projects</h2>
        <button
          onClick={() => navigate("/add/projets")}
          className="flex items-center gap-2 px-4 py-2 text-white bg-pink-600 rounded-lg shadow hover:bg-pink-700"
        >
          <FaPlus /> Add project
        </button>
      </div>

      {/* LISTE */}
      <div className="space-y-6">
        {projets.map((pro) => (
          <div
            key={pro.id}
            className="p-6 transition border shadow-sm rounded-xl hover:shadow-lg bg-gray-50"
          >
            <div className="flex flex-col gap-4 md:flex-row">
              {/* IMAGE DU PROJET */}
              <img
                src={pro.image}
                alt={pro.titre}
                className="object-cover w-full h-32 rounded-lg md:w-48"
              />

              <div className="flex-1">
                {/* Titre */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-800">
                    {pro.titre}
                  </h3>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/projets/edit/${pro.id}`)}
                      className="flex items-center gap-1 px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(pro.id)}
                      className="flex items-center gap-1 px-3 py-1 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700"
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 text-gray-600">{pro.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {pro.skills.map((skill, index) => (
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
