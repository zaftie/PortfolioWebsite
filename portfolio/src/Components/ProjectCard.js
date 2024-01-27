import React from "react";

function ProjectCard(props){
    return(<div>
        <h1>{props.name}</h1>
        <p>{props.date}</p>
        <p>{props.desc}</p> 
    </div>);
}

export default ProjectCard;