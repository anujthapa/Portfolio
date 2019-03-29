import React from "react"
import { skills } from "../../utls/data/skills"

const Skills = () => {
  return (
    <div className="about-skills">
      <ul class="gallery">
        {skills.map(img => (
          <li>
            <a href="#">
              <img src={img.img} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Skills
