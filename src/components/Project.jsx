import React from "react";

const Project = ({ title, description, image, liveLink, repoLink }) => {
  return (
    <div className="project-item">
      <h3>{title}</h3>
      <img src={image} alt={`${title} screentshot`} />
      <p>{description}</p>
    </div>
  );
};

export default Project;
