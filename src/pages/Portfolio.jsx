import React from "react";
import Project from "../components/Project";
import quizImage from "../assets/images/quiz-me-screenshot.png"; // Import the image
import bucketListImage from "../assets/images/bucketlist-screenshot.png"; // Import the image
import omdbImage from "../assets/images/omdb-api-screenshot.png"; // Import the image
const Portfolio = () => {
  const projects = [
    {
      title: "Quiz Me",
      image: quizImage, // Use the imported image here
      liveLink: "https://kurlee710.github.io/quiz-me-repo/",
      repoLink: "https://github.com/kurlee710/quiz-me-repo",
      description:
        "A quiz web app that tests the users knowledge on html, css, and javascript.",
    },
    {
      title: "Bucket List",
      image: bucketListImage,
      liveLink: "https://heartfelt-raindrop-1cfaab.netlify.app",
      repoLink: "https://github.com/kurlee710/bucketlist-app",
      description:
        "A web app that allows the user to add items to their bucket list and apply a priority level.",
    },
    {
      title: "OMDb API app",
      image: omdbImage,
      liveLink: "https://omdb-api-app.netlify.app/",
      repoLink: "https://github.com/kurlee710/omdb-api-project/tree/main",
      description:
        "Web app using the Open Movie Database api to fetch movies (Live demo currently not working)",
    },
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
