import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import school1 from "../../../assets/work_logo/image_search.png";
import school2 from "../../../assets/work_logo/movie_rec.png";

import glaLogo from '../../../assets/education_logo/gla_logo.png';
import bsaLogo from '../../../assets/education_logo/bsa_logo.png';
import vpsLogo from '../../../assets/education_logo/vps_logo.png';

export default function Education() {
  const navigate = useNavigate();

  const [educations, setEducations] = useState([
    {
      id: 1,
      ecole: "Université d'Abomey-Calavi",
      image: school1,
      grade: "Licence",
      degree: "Informatique de Gestion",
      dateDebut: "2018",
      dateFin: "2021",
      description:
        "Formation complète en informatique de gestion, programmation et bases de données.",
    },
    {
      id: 2,
      ecole: "Université de Lomé",
      image: school2,
      grade: "Master",
      degree: "Développement Logiciel",
      dateDebut: "2021",
      dateFin: "2023",
      description:
        "Spécialisation en développement logiciel et architectures modernes.",
    },
    {
      id: 3,
      image: glaLogo,
      ecole: "GLA University, Mathura",
      dateDebut: "Sept 2022",
      dateFin: "July 2024",
      grade: "7.81 CGPA",
      description: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 4,
      image: bsaLogo,
      ecole: "BSA College, Mathura",
      dateDebut: "Sept 2018",
      dateFin: "Aug 2021",
      grade: "73.2%",
      description: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 5,
      image: vpsLogo,
      ecole: "Vatsalya Public School Govardhan, Mathura",
      dateDebut: "Apr 2017",
      dateFin: "March 2018",
      grade: "78%",
      description: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 6,
      image: vpsLogo,
      ecole: "Vatsalya Public School Govardhan, Mathura",
      dateDebut: "Apr 2015",
      dateFin: "March 2016",
      grade: "87.5%",
      description: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ]);

  const handleDelete = (id) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };

  return (
    <div className="w-full max-w-5xl p-6 bg-white shadow-md rounded-2xl">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">My Education</h2>
        <button
          onClick={() => navigate("/add/educations")}
          className="flex items-center gap-2 px-4 py-2 text-white bg-green-600 rounded-lg shadow hover:bg-green-700"
        >
          <FaPlus /> Add Education
        </button>
      </div>

      {/* LISTE */}
      <div className="space-y-6">
        {educations.map((edu) => (
          <div
            key={edu.id}
            className="p-6 transition border shadow-sm rounded-xl hover:shadow-lg bg-gray-50"
          >
            <div className="flex flex-col gap-4 md:flex-row">
              {/* IMAGE */}
              <img
                src={edu.image}
                alt={edu.ecole}
                className="object-cover w-full h-32 rounded-lg md:w-48"
              />

              <div className="flex-1">
                {/* Nom école + actions */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-800">
                    {edu.ecole}
                  </h3>

                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/educations/edit/${edu.id}`)}
                      className="flex items-center gap-1 px-3 py-1 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(edu.id)}
                      className="flex items-center gap-1 px-3 py-1 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700"
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>

                {/* Dates */}
                <p className="mt-1 text-sm text-gray-500">
                  📅 {edu.dateDebut} - {edu.dateFin}
                </p>

                {/* Grade & Degree */}
                <p className="mt-1 font-medium text-gray-700">
                  🎓 {edu.grade} - {edu.degree}
                </p>

                {/* Description */}
                <p className="mt-3 text-gray-600">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
