import React from "react"
import "./footer.scss"

const Footer = () => {
  return (
    <div className="main">
      <div className="footer">
        <div className="copyright">
          &copy; Anuj thapa {new Date().getFullYear()}
        </div>
        <div className="socialmedia">
          <a href="https://www.facebook.com/thapaaanuj" target="blank">
            <i class="fab fa-facebook-square" />
          </a>
          <a href="https://www.instagram.com/anuj.thapa/" target="blank">
            <i class="fab fa-instagram" />
          </a>
          <a href="https://github.com/anujthapa" target="blank">
            <i class="fab fa-github" />
          </a>

          <a href="https://codepen.io/anujthapa/" target="blank">
            <i class="fab fa-codepen" />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Footer
