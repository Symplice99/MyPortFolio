import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom"

export default function Skills() {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([
    {
      id: 1,
      name: "React",
      category: "Frontend",
      image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      category: "Language",
      image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    },
    {
      id: 4,
      name: "Git",
      category: "Tool",
      image: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    },
  ]);

  
  const [showModal, setShowModal] = useState(false);
  const [newSkill, setNewSkill] = useState({
    name: "",
    category: "",
    image: "",
  });

  // Ajouter un skill
  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkill.name || !newSkill.category || !newSkill.image) {
      alert("Tous les champs sont requis !");
      return;
    }
    const newId = skills.length ? skills[skills.length - 1].id + 1 : 1;
    setSkills([...skills, { id: newId, ...newSkill }]);
    setNewSkill({ name: "", category: "", image: "" });
    setShowModal(false);
  };

  // Supprimer un skill
  const handleDelete = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Éditer la compétence avec ID ${id}`);
  };

  const handleAdd = () => {
    alert("Formulaire pour ajouter un nouveau skill 🚀");
  };

  return (
    // <div className="flex flex-col items-center min-h-screen p-6 bg-gray-50">
    // </div>
    <>
      <div className="w-full max-w-4xl p-6 mx-auto bg-white shadow-md rounded-2xl">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">My Skills</h2>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-4 py-2 text-white bg-pink-600 rounded-lg shadow hover:bg-pink-700"
          >
            <FaPlus /> Add skill
          </button>
        </div>

        {/* LISTE DES SKILLS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center p-4 transition border shadow-sm rounded-xl hover:shadow-lg"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="object-contain w-16 h-16 mb-3"
              />
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <p className="mb-4 text-sm text-gray-500">{skill.category}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => navigate(`/skills/edit/${skill.id}`)}
                className="flex items-center gap-1 px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleDelete(skill.id)}
                  className="flex items-center gap-1 px-3 py-1 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL FORMULAIRE */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
            <h3 className="mb-4 text-xl font-bold text-gray-800">Add skill</h3>
            <form onSubmit={handleAddSkill} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={newSkill.name}
                  onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                  className="w-full px-3 py-2 mt-1 border rounded-lg"
                  placeholder="Ex: React"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  value={newSkill.category}
                  onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                  className="w-full px-3 py-2 mt-1 border rounded-lg"
                >
                  <option value="">-- Choisir --</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Language">Language</option>
                  <option value="Tool">Tool</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image path</label>
                <input
                  type="text"
                  value={newSkill.image}
                  onChange={(e) => setNewSkill({ ...newSkill, image: e.target.value })}
                  className="w-full px-3 py-2 mt-1 border rounded-lg"
                  placeholder="Ex: https://cdn.worldvectorlogo.com/logos/react-2.svg"
                />
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-pink-600 rounded-lg shadow hover:bg-pink-700"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
