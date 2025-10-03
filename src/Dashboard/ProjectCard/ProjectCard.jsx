import React from "react";

export default function ProjectCard({ title, color, members, tasks }) {
  return (
    <div className={`${color} text-white rounded-xl p-6 shadow-md`}>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm">{tasks} Tasks</p>
      <p className="text-sm">{members} Members</p>
    </div>
  );
}
