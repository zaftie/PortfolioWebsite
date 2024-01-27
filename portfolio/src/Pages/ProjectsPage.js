import React from 'react';
import BasicExample from '../Components/NavScrollExample';
import ProjectCard from '../Components/ProjectCard';
import "../Styling/Content.css"
function ProjectsPage() {
  return( 
        <div>
            <BasicExample />
            <h1 style={{ textAlign: 'center', color: 'white' }}>Projects</h1>;
            <div className='content'>
            <ProjectCard 
                name = "Portfolio"
                date = "Janurary 1 2024 - Janurary 31 2024"
                desc = "A portfolio website for myself for software engineering"
                lang = "React, Js, Css, HTML"
            />
            <ProjectCard 
                name = "Game 1"
                date = "December 1 2023 - Janurary 31 2024"
                desc = "A co-op shooter that uses unity "
                lang = "Unity, C#, "
            />
            </div>
        </div>);
}

// Other page components...

export default ProjectsPage;