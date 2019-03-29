import React from "react"
import anuj from "../../utls/img/Anuj.jpg"
import Button from "../common/Button"
import "./home.scss"

const Home = () => {
  return (
    <div id="home-bg">
      {alert("THIS PAGE IS STILL ON DEVELOPMENT PROCESS")}
      <div className="home  shadow1" id="home">
        <div className="img animated slideInRight">
          <img src={anuj} />
        </div>
        <div className="intoduction animated slideInLeft">
          <span>
            <h2 className="zoomIn">Hello,I'm</h2>
          </span>
          <span>
            <h1>
              <b>Anuj Thapa</b>
            </h1>
          </span>
          <span>
            <h2> Frontend developer</h2>
          </span>
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
          <div className="hireme">
            <a href="#contact">
              <Button text="Hire me" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
