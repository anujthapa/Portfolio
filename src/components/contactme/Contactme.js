import React, { Component } from "react"

import "./contactme.scss"

class Contactme extends Component {
  render() {
    return (
      <div className="container" id="contact">
        <div className="row header">
          <h1>CONTACT ME &nbsp;</h1>
        </div>
        <div className="row body">
          <form>
            <ul>
              <li>
                <p className="left">
                  <label for="first_name">first name</label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                  />
                </p>
                <p className="pull-right">
                  <label for="last_name">last name</label>
                  <input type="text" name="last_name" placeholder="Last Name" />
                </p>
              </li>

              <li>
                <p>
                  <label for="email">
                    email <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="email"
                    placeholder="Your Email Address"
                  />
                </p>
              </li>
              <li />
              <li>
                <label for="comments">Message</label>
                <textarea cols="46" rows="7" name="comments" />
              </li>

              <li>
                <input
                  className="btn btn-submit"
                  type="submit"
                  value="Submit"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
}
export default Contactme
