import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

export default function EditEducation() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Récupération de l’éducation passée en state
  const education = location.state?.education;

  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  // Charger les données existantes dans le formulaire
  useEffect(() => {
    if (education) {
      setFormData({
        school: education.school || "",
        degree: education.degree || "",
        fieldOfStudy: education.fieldOfStudy || "",
        startDate: education.startDate || "",
        endDate: education.endDate || "",
        description: education.description || "",
      });
    }
  }, [education]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Éducation mise à jour :", formData);
    // 👉 Ici tu pourras envoyer `formData` à ton backend
  };

  return (
    <div className="max-w-3xl p-6 mx-auto bg-white shadow-lg rounded-xl">
      {!education ? (
        <div>
          <p className="text-red-500">
            Aucune donnée d’éducation trouvée pour l’ID {id}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 mt-3 text-white bg-gray-600 rounded-lg"
          >
            Retour
          </button>
        </div>
      ) : (
        <>
          <h2 className="mb-6 text-2xl font-bold">Modifier une formation</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Établissement */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Établissement
              </label>
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange}
                className="block w-full p-2 mt-1 border rounded-lg"
                required
              />
            </div>

            {/* Diplôme */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Diplôme / Formation
              </label>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="block w-full p-2 mt-1 border rounded-lg"
              />
            </div>

            {/* Domaine d’étude */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Domaine d’étude
              </label>
              <input
                type="text"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
                className="block w-full p-2 mt-1 border rounded-lg"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date de début
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="block w-full p-2 mt-1 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date de fin
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="block w-full p-2 mt-1 border rounded-lg"
                />
              </div>
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

            {/* Submit */}
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700"
            >
              Mettre à jour
            </button>
          </form>
        </>
      )}
    </div>
  );
}
