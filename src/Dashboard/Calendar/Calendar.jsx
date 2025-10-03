import React from "react";

export default function Calendar() {
  const events = [
    { time: "09:00 AM", title: "Facebook Brand UI" },
    { time: "10:30 AM", title: "Design System" },
    { time: "01:00 PM", title: "Task Management" },
    { time: "03:00 PM", title: "Web App Design" },
    { time: "05:00 PM", title: "Mobile App Meeting" },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-xl h-fit">
      <h3 className="mb-4 text-lg font-semibold">Calendar</h3>
      <ul className="space-y-3">
        {events.map((event, i) => (
          <li key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
            <span className="font-medium">{event.time}</span>
            <span className="text-gray-600">{event.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
