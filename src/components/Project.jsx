import React from "react";

const Project = ({ title, description, image, liveLink, repoLink }) => {
  return (
    <div className="project-item">
      <h3>{title}</h3>
      <img
        src={image}
        alt={`${title} screenshot`}
        style={{
          width: "450px",
          height: "300px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <p>{description}</p>
      <div className="project-links">
        <a href={liveLink} target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a
          href={repoLink}
          target="_blank"
          rel="noreferrer"
          style={{ marginLeft: "50px" }}
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project;
