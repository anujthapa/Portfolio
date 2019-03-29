import React from "react"
import { skills } from "../../utls/data/skills"

function Introduction() {
  return (
    <div className="about-intro">
      <div className="about-aboutme">
        <h1>About me</h1>
        <p>
          I am Programming enthusiast. Everything started with a passion for new
          technologies.I am good at developing paper idea to a web-application.
          I work in new technologies like
          {skills.map(skill => (
            <span>{skill.name}</span>
          ))}
          <br />
        </p>
      </div>
    </div>
  )
}
export default Introduction
