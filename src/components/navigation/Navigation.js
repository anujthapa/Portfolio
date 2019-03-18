import React, { Component } from "react"
import "./navigation.scss"

class Navigation extends Component {
  state = {
    active: true
  }
  activeToogle = menu => {
    this.setState({ [menu]: true })
  }
  render() {
    return (
      <div className="navigation border-shadow-bottom">
        <div className="logo">
          <h1 className="display ">
            <a href="#home" onClick={() => this.activeToogle()}>
              &lt;A /&gt;
            </a>
          </h1>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#work" onClick={() => this.activeToogle("work")}>
                WORK
              </a>
            </li>
            <li>
              <a href="#aboutme" onClick={() => this.activeToogle("aboutme")}>
                ABOUT ME
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => this.activeToogle("contact")}>
                CONTACT
              </a>
            </li>
            <li>
              <a>HIRE ME</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Navigation
