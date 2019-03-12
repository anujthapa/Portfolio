import React from "react"
import "./navigation.css"

const Navigation = ({ A }) => {
  return (
    <div className="navigation border-shadow-bottom">
      <div className="logo">
        <h1 class="display">&lt;A /&gt;</h1>
        <h1 className="displayoption">&lt;ANUJ THAPA /&gt;</h1>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a>WORK</a>
          </li>
          <li>
            <a>ABOUT ME</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
          <li>
            <a>HIRE ME</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navigation
