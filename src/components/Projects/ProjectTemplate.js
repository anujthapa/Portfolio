import React from "react"
import "./projectTemplate.scss"

const ProjectTemplate = ({
  projectname,
  date,
  tag,
  subheading,
  img,
  description
}) => {
  return (
    <div className="blog-card">
      <div className="meta">
        <div
          className="photo"
          style={{
            backgroundImage: `url(${img}+)`
          }}
        />
        <ul className="details">
          <li className="author">
            <a href="#">{projectname}</a>
          </li>
          <li className="date">{date}</li>
          <li className="tags">
            <ul>
              {tag.map(item => (
                <li>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>{projectname}</h1>
        <h2>{subheading}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default ProjectTemplate
