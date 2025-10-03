import React, { useState } from "react";

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    titre: "",
    image: null,
    lien: "",
    description: "",
    skills: [],
  });

  // Liste de compétences disponibles
  const allSkills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript",
    "TailwindCSS",
    "Docker",
    "Python",
    "Java",
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Gestion de l’ajout de compétence depuis la liste
  const handleSkillSelect = (e) => {
    const selectedSkill = e.target.value;
    if (
      selectedSkill !== "" &&
      !formData.skills.includes(selectedSkill)
    ) {
      setFormData({
        ...formData,
        skills: [...formData.skills, selectedSkill],
      });
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Projet ajouté :", formData);
    // Ici tu peux envoyer formData à ton backend
  };

  return (
    <div className="max-w-3xl p-6 mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="mb-6 text-2xl font-bold">Ajouter un projet</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Titre */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Titre du projet</label>
          <input
            type="text"
            name="titre"
            value={formData.titre}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border rounded-lg"
            required
          />
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Image du projet</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="block w-full p-2 mt-1 border rounded-lg"
          />
        </div>

        {/* Lien (optionnel) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Lien du projet (GitHub ou Demo)</label>
          <input
            type="url"
            name="lien"
            value={formData.lien}
            onChange={handleChange}
            placeholder="https://monprojet.com"
            className="block w-full p-2 mt-1 border rounded-lg"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border rounded-lg"
            rows="3"
          />
        </div>

        {/* Skills */}
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Compétences utilisées
          </label>

          <select
            onChange={handleSkillSelect}
            className="block w-full p-2 mt-1 border rounded-lg"
          >
            <option value="">-- Choisir une compétence --</option>
            {allSkills.map((skill, index) => (
              <option key={index} value={skill}>
                {skill}
              </option>
            ))}
          </select>

          {/* Liste des skills */}
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.skills.map((skill, index) => (
              <span
                key={index}
                className="flex items-center px-3 py-1 text-sm text-blue-700 bg-blue-100 rounded-full"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        </div>
    

        {/* Submit */}
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
}
