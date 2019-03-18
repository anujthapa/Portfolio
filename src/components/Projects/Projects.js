import React from "react"
import ProjectTemplate from "./ProjectTemplate"
import Filter from "./Filter"
import { projects } from "../../utls/data/projects"
import Gap from "../common/Gap"

import "./project.css"

const Projects = () => {
  return (
    <div className="projects " id="work">
      <Gap />
      <div>
        <h1>MY WORKS</h1>
        <div className="filters">
          <Filter text="All" />
          <Filter text="JAVA SCRIPT" />
          <Filter text="REACT" />
          <Filter text="C#" />
          <Filter text="PHP" />
        </div>
        {projects.map(item => (
          <ProjectTemplate
            projectname={item.projectname}
            date={item.date}
            tag={item.tag}
            img={item.img}
            subheading={item.subeading}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}
export default Projects
