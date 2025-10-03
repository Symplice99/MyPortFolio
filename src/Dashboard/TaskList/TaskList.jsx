import React from "react";

export default function TaskList() {
  return (
    <div className="p-6 bg-white shadow-md rounded-xl">
      <h3 className="mb-4 text-lg font-semibold">Tasks for today</h3>
      <ul className="space-y-4">
        <li className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
          <span>📱 Mobile App</span>
          <input type="checkbox" />
        </li>
        <li className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
          <span>🎨 UX wireframes</span>
          <input type="checkbox" />
        </li>
        <li className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
          <span>🖥 Web App</span>
          <input type="checkbox" />
        </li>
      </ul>
    </div>
  );
}
