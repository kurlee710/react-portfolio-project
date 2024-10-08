import React from "react";
import Project from "../components/Project";
import quizImage from "../assets/images/quiz-me-screenshot.png"; // Import the image
import bucketListImage from "../assets/images/bucketlist-screenshot.png"; // Import the image
const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      image: quizImage, // Use the imported image here
      liveLink: "https://kurlee710.github.io/quiz-me-repo/",
      repoLink: "https://github.com/kurlee710/quiz-me-repo",
      description: "Description of project 1.",
    },
    {
      title: "Project 2",
      image: bucketListImage,
      liveLink: "https://heartfelt-raindrop-1cfaab.netlify.app",
      repoLink: "https://github.com/kurlee710/bucketlist-app",
      description: "Description of project 2.",
    },
    { title: "Project 3", description: "Description of project 3." },
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
