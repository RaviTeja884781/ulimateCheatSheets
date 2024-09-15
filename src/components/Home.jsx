import React from "react";
import { Box, Link } from "react-ui-essentials";
import svg from "../assets/react.svg";

// Function to generate a random decent background color
const getRandomBackgroundColor = () => {
  const colors = [
    "#ffadad", // Light red
    "#ffd6a5", // Light orange
    "#fdffb6", // Light yellow
    "#caffbf", // Light green
    "#9bf6ff", // Light blue
    "#a0c4ff", // Light violet
    "#bdb2ff", // Light purple
    "#ffc6ff", // Light pink
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Home = () => {
  const links = [
    {
      id: 1,
      label: "Html",
      path: "/html",
    },
    { id: 2, label: "Css", path: "/css" },
    { id: 3, label: "Javascript", path: "/javascript" },
    { id: 4, label: "Vs Code", path: "/vsCode" },
    { id: 5, label: "Git", path: "/git" },
    { id: 6, label: "Es6", path: "/es6" },
    { id: 7, label: "Emmet", path: "/emmet" },
    { id: 8, label: "Git hub CLI", path: "/githubCli" },
    { id: 9, label: "Github Actions", path: "/githubActions" },
    { id: 10, label: "Docker", path: "/docker" },
    { id: 11, label: "Markdown", path: "/markdown" },
  ];

  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center">
      {links.map((item) => {
        return (
          <Link to={item.path}>
            <Box
              key={item.id}
              width="150px"
              height="60px"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "10px",
              }}
              backgroundColor="#bdb2ff"
              margin="5px"
              rounded
            >
              <img
                src={svg}
                width="25px"
                height="25px"
                style={{ marginLeft: "10px" }}
                alt=""
              />
              <p className="text-lg font-medium text-black">{item.label}</p>
            </Box>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
