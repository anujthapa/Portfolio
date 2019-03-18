import React from "react"
import "./aboutme.css"
import { aboutme } from "../../utls/data/aboutme"
const Aboutme = () => {
  return (
    <div className="aboutme box1 shadow1" id="aboutme">
      <div className="content animated zoomIn ">
        <h1>About Me</h1>§<p>{aboutme.map(item => item)}</p>
      </div>
    </div>
  )
}
export default Aboutme
