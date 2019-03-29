import React from "react"
import "./aboutme.scss"

import Introduction from "./Introduction"
import Skills from "./Skills"
const Aboutme = () => {
  return (
    <div className="aboutme " id="aboutme">
      <Introduction />
      <Skills />
    </div>
  )
}
export default Aboutme
