import React, { Component } from "react"
import "./navigation.scss"
import Menu from "./Menu"
import Gap from "../common/Gap"

class Navigation extends Component {
  state = {
    isOpen: false
  }

  handleOpen = () => {
    const { isOpen } = this.state
    this.setState({
      isOpen: !isOpen
    })
  }
  render() {
    const { isOpen } = this.state
    return (
      <React.Fragment>
        <div className="navigation ">
          <div className="logo">
            <h1 className="display ">
              <a href="#home">&lt;A /&gt;</a>
            </h1>
          </div>
          <div className="burgermenu">
            <label className="checkbox menu" onClick={this.handleOpen}>
              <i class="fas fa-bars" />
            </label>
          </div>
          <div className="menu-content">
            <Menu />
          </div>
        </div>
        <div className="burgermenu-content">{isOpen && <Menu />}</div>
        <div />
      </React.Fragment>
    )
  }
}
export default Navigation
