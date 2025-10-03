import React, { useState } from "react";
import { FaEdit, FaSave, FaTimes, FaCamera } from "react-icons/fa";

export default function AboutEdit() {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    nom: "Connor",
    prenoms: "Sarah",
    email: "visosima@gmail.com",
    fonction: "Fullstack Developer",
    professions: ["Developer", "Designer"],
    bio: "Passionnée par la création d'expériences numériques modernes et intuitives. Je travaille aussi bien sur le frontend que le backend.",
  });
  const [professionInput, setProfessionInput] = useState("");

  const [formData, setFormData] = useState(user);

  // gestion des changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleprofessionKeyDown = (e) => {
    if (e.key === "Enter" && professionInput.trim() !== "") {
      e.preventDefault();
      if (!formData.professions.includes(professionInput.trim())) {
        setFormData({
          ...formData,
          professions: [...formData.professions, professionInput.trim()],
        });
      }
      setProfessionInput("");
    }
  };

  const removeprofession = (professionToRemove) => {
    setFormData({
      ...formData,
      professions: formData.professions.filter((profession) => profession !== professionToRemove),
    });
  };

   // gestion du changement de photo
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        photo: imageURL,
      }));
    }
  };

  // sauvegarde
  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  return (
      <div className="w-full max-w-md p-6 mx-auto bg-white shadow-lg rounded-2xl">
        {/* PHOTO */}
        <div className="relative flex flex-col items-center">
          <img
            src={formData.photo}
            alt="Profil"
            className="object-cover w-32 h-32 mb-4 rounded-full shadow-md"
          />

          {isEditing && (
            <label
              htmlFor="photoUpload"
              className="absolute p-2 bg-gray-600 rounded-full shadow-lg cursor-pointer bottom-4 right-40 hover:bg-gray-700"
            >
              <FaCamera className="text-white" />
              <input
                type="file"
                id="photoUpload"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
            </label>
          )}
        </div>

        {/* MODE LECTURE */}
        {!isEditing ? (
          <>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {user.prenoms} {user.nom}
              </h2>
              <p className="mt-1 font-medium text-pink-600">{user.fonction}</p>
              <p className="mt-4 text-gray-600">{user.bio}</p>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={() => {
                  setFormData(user);
                  setIsEditing(true);
                }}
                className="flex items-center gap-2 px-5 py-2 text-white bg-pink-600 rounded-lg shadow hover:bg-pink-700"
              >
                <FaEdit /> Modifier
              </button>
            </div>
          </>
        ) : (
          /* MODE EDITION */
          <div className="space-y-4">
            <input
              type="text"
              name="prenoms"
              value={formData.prenoms}
              onChange={handleChange}
              placeholder="Prénoms"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Nom"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="text"
              name="fonction"
              value={formData.fonction}
              onChange={handleChange}
              placeholder="Fonction"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows="4"
              placeholder="Biographie"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
            />

            {/* professions */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Profession
              </label>
              <input
                type="text"
                value={professionInput}
                onChange={(e) => setProfessionInput(e.target.value)}
                onKeyDown={handleprofessionKeyDown}
                placeholder="Tapez une compétence et appuyez sur Entrée"
                className="block w-full p-2 mt-1 border rounded-lg"
              />

              <div className="flex flex-wrap gap-2 mt-2">
                {formData.professions.map((profession, index) => (
                  <span
                    key={index}
                    className="flex items-center px-3 py-1 text-sm text-blue-700 bg-blue-100 rounded-full"
                  >
                    {profession}
                    <button
                      type="button"
                      onClick={() => removeprofession(profession)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex justify-between mt-4">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
              >
                <FaSave /> Sauvegarder
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex items-center gap-2 px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
              >
                <FaTimes /> Annuler
              </button>
            </div>
          </div>
        )}
      </div>
    // <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gray-50">
    // </div>
  );
}
