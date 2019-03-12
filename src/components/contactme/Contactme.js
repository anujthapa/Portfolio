import React, { Component } from "react"
import "./contactme.scss"

class Contactme extends Component {
  render() {
    return (
      <div>
        <section className="get-in-touch">
          <h1 className="title">Contact Me</h1>
          <form className="contact-form row">
            <div className="form-field col x-50">
              <input
                id="name"
                className="input-text js-input"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-field col x-50">
              <input
                id="email"
                className="input-text js-input"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-field col x-100">
              <input
                id="message"
                className="input-text js-input"
                type="text"
                placeholder="Message"
                required
              />
            </div>
            <div className="form-field col x-100 align-center">
              <input className="submit-btn" type="submit" value="Submit" />
            </div>
          </form>
        </section>
      </div>
    )
  }
}
export default Contactme
