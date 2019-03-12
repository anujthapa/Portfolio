import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <div className="main">
      <div className="footer">
        <div className="copyright">
          &copy; Anuj thapa {new Date().getFullYear()}
        </div>
        <div className="socialmedia">
          <i class="fab fa-facebook-square" />
          <i class="fab fa-instagram" />
          <i class="fab fa-github" />
          <i class="fab fa-codepen" />
        </div>
        <div className="menu">
          <ul>
            <li>WORK</li>
            <li>ABOUT ME</li>
            <li>CONTACT</li>
            <li>HIRE ME</li>
          </ul>
        </div>
        <div className="hireme">
          <button>HIRE ME</button>
        </div>
      </div>
    </div>
  )
}
export default Footer
