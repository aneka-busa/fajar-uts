import { useState } from "react";
import ProjectItem from "./ProjectItem";
//! ScreenShots
import Industribusa from "./Img/industribusa.png";
import Catalog from "./Img/katalog.png";
import Alumni from "./Img/alumni.jpg";
import Jualbusa from "./Img/jualbusa.png";
function MyProjects() {
  const [projectState, useState] = useState([
   
    {
      id: 2,
      image: Industribusa,
      title: "Company Website",
      explanation: "search engine optimization manager",
      link: "https://industribusa.com",
      repoLink: "https://industribusa.com",
    },
    {
      id: 3,
      image: Catalog,
      title: "Online Catalog (React)",
      explanation: "develop web catalog for PT. Aneka Busa Internasional",
      link: "https://industrianekabusa.com",
      repoLink: "#",
    },
    {
      id: 4,
      image: Jualbusa,
      title: "Website Company",
      explanation: "website builder with wordpress and javascript",
      link: "https:/jualbusa.com",
      repoLink: "#",
    },
    {
      id: 5,
      image: Alumni,
      title: "Alumni-info(Laravel)",
      explanation: "Learning of laravel",
      link: "#",
      repoLink: "#",
    },
  ]);
  return (
    <>
      <h2
        id="myProjects"
        style={{ fontFamily: "Overpass", fontSize: "3.2rem" }}
        className="text-center my-3"
      >
        My Projects
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {projectState.map((project, index) => {
          return (
            <ProjectItem
              key={project.id}
              img={project.image}
              title={project.title}
              explanation={project.explanation}
              browserLink={project.link}
              repoLink={project.repoLink}
            ></ProjectItem>
          );
        })}
      </div>
    </>
  );
}

export default MyProjects;
