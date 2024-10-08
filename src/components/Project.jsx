import React from "react";

const Project = ({ title, description, image, liveLink, repoLink }) => {
  return (
    <div className="project-item">
      <h3>{title}</h3>
      <img src={image} alt={`${title} screentshot`} />
      <p>{description}</p>
      <div classname="project-links">
        <a href={liveLink} target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a href={repoLink} target="_blank" rel="noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project;
