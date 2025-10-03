import React from "react";

import ProjectCard from "../Dashboard/ProjectCard/ProjectCard";
import TaskList from "../Dashboard/TaskList/TaskList";
import Statistics from "../Dashboard/Statistic/Statistics";
import Calendar from "../Dashboard/Calendar/Calendar";
export default function Main() {
  return (
    <>
      {/* Main content */}
        <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-3">
          {/* Left side */}
          <div className="space-y-6 lg:col-span-2">
            {/* Projects */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <ProjectCard title="Web Development" color="bg-purple-500" members={3} tasks={12} />
              <ProjectCard title="Mobile App Design" color="bg-teal-400" members={5} tasks={8} />
              <ProjectCard title="Facebook Brand UI Kit" color="bg-orange-400" members={2} tasks={5} />
            </div>

            <TaskList />
            <Statistics />
          </div>

          <Calendar />
        </div>
   
    </>
      
  );
}
