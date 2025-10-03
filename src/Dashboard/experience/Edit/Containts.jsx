import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

export default function Containts() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Récupération de l’expérience passée en state
  const experience = location.state?.experience;

  const [formData, setFormData] = useState({
    poste: "",
    entreprise: "",
    logo: null,
    description: "",
    dateDebut: "",
    dateFin: "",
    skills: ["Oracle", "PHP"],
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

  const [skillInput, setSkillInput] = useState("");

  // Charger les données existantes dans le formulaire
  useEffect(() => {
    if (experience) {
      setFormData({
        poste: experience.poste || "",
        entreprise: experience.entreprise || "",
        logo: null,
        description: experience.description || "",
        dateDebut: experience.dateDebut || "",
        dateFin: experience.dateFin || "",
        skills: experience.skills || [],
      });
    }
  }, [experience]);

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
    console.log("Expérience mise à jour :", formData);
  };

  // 👉 Ici, on ne return plus avant les hooks
  return (
    <div className="max-w-3xl p-6 mx-auto bg-white shadow-lg rounded-xl">
      {!experience ? (
        <div>
          <p className="text-red-500">Aucune expérience trouvée pour l’ID {id}</p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 mt-3 text-white bg-gray-600 rounded-lg"
          >
            Back
          </button>
        </div>
      ) : (
        <>
          <h2 className="mb-6 text-2xl font-bold">Modifier une expérience</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Poste */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Poste occupé
              </label>
              <input
                type="text"
                name="poste"
                value={formData.poste}
                onChange={handleChange}
                className="block w-full p-2 mt-1 border rounded-lg"
                required
              />
            </div>

            {/* Entreprise */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Entreprise
              </label>
              <input
                type="text"
                name="entreprise"
                value={formData.entreprise}
                onChange={handleChange}
                className="block w-full p-2 mt-1 border rounded-lg"
                required
              />
            </div>

            {/* Logo */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Logo entreprise
              </label>
              <input
                type="file"
                name="logo"
                accept="image/*"
                onChange={handleChange}
                className="block w-full p-2 mt-1 border rounded-lg"
              />
              <p className="mt-1 text-xs text-gray-500">
                {experience?.logo
                  ? "Un logo est déjà associé, tu peux le remplacer."
                  : ""}
              </p>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="block w-full p-2 mt-1 border rounded-lg"
                rows="3"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date début
                </label>
                <input
                  type="date"
                  name="dateDebut"
                  value={formData.dateDebut}
                  onChange={handleChange}
                  className="block w-full p-2 mt-1 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date fin
                </label>
                <input
                  type="date"
                  name="dateFin"
                  value={formData.dateFin}
                  onChange={handleChange}
                  className="block w-full p-2 mt-1 border rounded-lg"
                />
              </div>
            </div>

            {/* Skills*/}
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
              className="px-4 py-2 text-white bg-green-600 rounded-lg shadow hover:bg-green-700"
            >
              Mettre à jour
            </button>
          </form>
        </>
      )}
    </div>
  );
}
