import React from "react";

export default function Statistics() {
  return (
    <div className="p-6 bg-white shadow-md rounded-xl">
      <h3 className="mb-4 text-lg font-semibold">Statistics</h3>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-4 rounded-lg bg-gray-50">
          <p className="text-xl font-bold">28h</p>
          <p className="text-sm text-gray-500">Tracked</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-50">
          <p className="text-xl font-bold">18</p>
          <p className="text-sm text-gray-500">Tasks</p>
        </div>
        <div className="p-4 rounded-lg bg-gray-50">
          <p className="text-xl font-bold">$39.99</p>
          <p className="text-sm text-gray-500">Pro Plan</p>
        </div>
      </div>
    </div>
  );
}
