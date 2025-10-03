import React from 'react';
import ReactDOM from 'react-dom/client';
  import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import LandingPage from './App';
import DashBoard from './Dashboard/Main.jsx';
import AboutEdit from './Dashboard/About/Edit/AboutsForm.jsx';

import Skills from './Dashboard/Skills/View/Skills.jsx';
import EditSkill from './Dashboard/Skills/Edit/EditSkill';

import ExperienceView from './Dashboard/experience/View/Experiences.jsx';
import ExperienceAdd from './Dashboard/experience/Add/AddExperience.jsx';
import EditExperience from './Dashboard/experience/Edit/Containts.jsx';

import ProjetView from './Dashboard/Projets/View/Projets.jsx';
import ProjetAdd from './Dashboard/Projets/Add/AddProjets.jsx';
import EditProjet from './Dashboard/Projets/Edit/EditProjets.jsx';

import EducationView from './Dashboard/Education/View/Educations.jsx';
import EducationAdd from './Dashboard/Education/Add/AddEducations.jsx';
import EditEducation from './Dashboard/Education/Edit/EditEducations.jsx';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <App /> */}
      
      <Router>
         <Routes>

            {/* route home */}
             <Route path="/" element={<LandingPage />} />

             {/* Dashboard */}
             <Route path="/dash" element={<DashBoard />} />

             {/* About */}
             <Route path="/aboutedit" element={<AboutEdit />} />

              {/* Skills */}
             <Route path="/skill" element={<Skills />} />
             <Route path="/skills/edit/:id" element={<EditSkill />} />

              {/* experiences */}
             <Route path="/experience" element={<ExperienceView />} />
             <Route path="/add/experience" element={<ExperienceAdd />} />
             <Route path="/experience/edit/:id" element={<EditExperience />} />

              {/* projets */}
             <Route path="/projets" element={<ProjetView />} />
             <Route path="/add/projets" element={<ProjetAdd />} />
             <Route path="/projets/edit/:id" element={<EditProjet />} />

              {/* Education */}
             <Route path="/educations" element={<EducationView />} />
             <Route path="/add/educations" element={<EducationAdd />} />
             <Route path="/educations/edit/:id" element={<EditEducation />} />
              
            {/* avoid 404 error */}
            <Route path="*" element={<Navigate to="/" replace />} />

         </Routes>
       </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
