import React, { useState } from "react";

export default function EducationForm() {
  const [formData, setFormData] = useState({
    ecole: "",
    image: null,
    grade: "",
    degree: "",
    dateDebut: "",
    dateFin: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Éducation ajoutée :", formData);
    // 👉 Ici tu pourras envoyer formData à ton backend
  };

  return (
    <div className="max-w-3xl p-6 mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="mb-6 text-2xl font-bold">Ajouter une éducation</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* École */}
        <div>
          <label className="block text-sm font-medium text-gray-700">École</label>
          <input
            type="text"
            name="ecole"
            value={formData.ecole}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border rounded-lg"
            required
          />
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Logo / Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="block w-full p-2 mt-1 border rounded-lg"
          />
        </div>

        {/* Grade */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Grade</label>
          <input
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border rounded-lg"
          />
        </div>

        {/* Degree */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Degree</label>
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            className="block w-full p-2 mt-1 border rounded-lg"
          />
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Date début</label>
            <input
              type="month"
              name="dateDebut"
              value={formData.dateDebut}
              onChange={handleChange}
              className="block w-full p-2 mt-1 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date fin</label>
            <input
              type="month"
              name="dateFin"
              value={formData.dateFin}
              onChange={handleChange}
              className="block w-full p-2 mt-1 border rounded-lg"
            />
          </div>
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

        {/* Submit */}
        <button
          type="submit"
          className="px-4 py-2 text-white bg-green-600 rounded-lg shadow hover:bg-green-700"
        >
          Save
        </button>
      </form>
    </div>
  );
}
