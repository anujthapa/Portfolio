import React from "react"
import ProjectTemplate from "./ProjectTemplate"
import Filter from "./Filter"
import { projects } from "../../utls/data/projects"
import Gap from "../common/Gap"

import "./project.scss"

class Projects extends React.Component {
  state = { projects: [] }

  componentDidMount() {
    this.setState({ projects })
  }
  onAllHandaler = () => {
    this.setState({ projects })
  }
  onReactHandaler = () => {
    this.setState({ projects })
    const reactProjects = projects.filter(item => item.techUsed === "REACT")

    this.setState({ projects: reactProjects })
  }
  onCsharpHandaler = () => {
    this.setState({ projects })
    const reactProjects = projects.filter(item => item.techUsed === "C#")

    this.setState({ projects: reactProjects })
  }
  onJSHandaler = () => {
    this.setState({ projects })
    const reactProjects = projects.filter(
      item => item.techUsed === "JAVASCRIPT"
    )

    this.setState({ projects: reactProjects })
  }
  onPHPHandaler = () => {
    this.setState({ projects })
    const reactProjects = projects.filter(item => item.techUsed === "PHP")
    console.log(reactProjects)
    this.setState({ projects: reactProjects })
  }
  render() {
    return (
      <div className="projects " id="work">
        <Gap />
        <div>
          <h1>MY WORKS</h1>
          <div className="filters">
            <Filter text="All" onClick={this.onAllHandaler} />
            <Filter text="JAVA SCRIPT" onClick={this.onJSHandaler} />
            <Filter text="REACT" onClick={this.onReactHandaler} />
            <Filter text="C#" onClick={this.onCsharpHandaler} />
            <Filter text="PHP" onClick={this.onPHPHandaler} />
          </div>
          {this.state.projects.length >= 0 ? (
            <React.Fragment>
              {this.state.projects.map(item => (
                <ProjectTemplate
                  projectname={item.projectname}
                  date={item.date}
                  tag={item.tag}
                  img={item.img}
                  subheading={item.subeading}
                  description={item.description}
                />
              ))}
            </React.Fragment>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    )
  }
}

export default Projects
