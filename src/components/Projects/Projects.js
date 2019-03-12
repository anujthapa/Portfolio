import React from "react"
import ProjectTemplate from "./ProjectTemplate"
import { data } from "../../utls/data/data"
import "/Users/anujthapa/Documents/portfolio/src/components/Projects/project.css"
const Projects = () => {
  return (
    <div className="projects ">
      <h1>MY WORKS</h1>
      <ProjectTemplate />
      <ProjectTemplate />
      <ProjectTemplate />
    </div>
  )
}
export default Projects
