import React from "react";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/kurlee710" target="_blank" rel="noreferrer">
        <i
          className="fab fa-github"
          style={{
            fontSize: "40px",
            transition: "color 0.3s ease", // Smooth transition effect
            color: "rgb(234, 235, 237)", // Initial color
          }}
          onMouseEnter={(e) => (e.target.style.color = "rgb(163, 186, 195)")} // Change color on hover
          onMouseLeave={(e) => (e.target.style.color = "rgb(234, 235, 237)")} // Revert back on mouse leave
        ></i>
      </a>
      <p style={{ color: "rgb(234, 235, 237)" }}>&copy; 2024 My Portfolio</p>
    </footer>
  );
};

export default Footer;
