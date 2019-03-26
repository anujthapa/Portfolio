import React, { Component } from "react"
import NetlifyForm from "react-netlify-form"

import "./contactme.scss"
import Gap from "../common/Gap"

class Contactme extends Component {
  render() {
    return (
      <div id="contact">
        <Gap />
        <section className="get-in-touch">
          <h1 className="title">Contact Me</h1>
          <NetlifyForm
            className="contact__form"
            name="Form With Recaptcha"
            recaptcha={{
              sitekey: "",
              size: "normal"
            }}
          >
            {({ loading, error, recaptchaError, success, recaptcha }) => (
              <>
                {error && (
                  <div className="connection-error">
                    Your information was not sent. Please try again later.
                  </div>
                )}
                {/* recaptchaError && (
                  <div className="recaptcha-error">
                    Oops, Recaptcha did not match. Please make sure the box is
                    checked.
                  </div>
                ) */}
                {success && (
                  <div className="success-message">
                    Thank you for contacting us! We will get back to you
                    shortly.
                  </div>
                )}
                {!loading && !success && (
                  <div className="contact__form">
                    <div className="contact__email">
                      <label
                        className="contact__email-label"
                        htmlFor="contact-email"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        className="contact__email-input"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                    <textarea
                      placeholder="Your message"
                      className="contact__textarea"
                      name="description"
                      required
                    />

                    {/* recaptcha */}
                    <button type="submit" className="form-submit">
                      Send
                    </button>
                  </div>
                )}
              </>
            )}
          </NetlifyForm>
        </section>
        <Gap />
      </div>
    )
  }
}
export default Contactme
