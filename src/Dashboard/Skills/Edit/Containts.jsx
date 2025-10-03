import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditSkill() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Exemple : fetch depuis une API, ici valeurs par défaut
  const [skill, setSkill] = useState({
    name: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    //  charger les données depuis le backend
    setSkill({
      name: "React",
      category: "Frontend",
      image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Skill mis à jour :", skill);
    navigate("/skill");
  };

  return (
    // <div className="flex items-center justify-center min-h-screen px-4 py-10 bg-gray-50">
    // </div>
      <div className="w-full max-w-md p-6 mx-auto bg-white shadow-lg rounded-2xl">
        <h2 className="mb-6 text-2xl font-bold">Edit the skill</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={skill.name}
              onChange={(e) => setSkill({ ...skill, name: e.target.value })}
              className="w-full px-3 py-2 mt-1 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              value={skill.category}
              onChange={(e) => setSkill({ ...skill, category: e.target.value })}
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
              value={skill.image}
              onChange={(e) => setSkill({ ...skill, image: e.target.value })}
              className="w-full px-3 py-2 mt-1 border rounded-lg"
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-pink-600 rounded-lg shadow hover:bg-pink-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
  );
}
