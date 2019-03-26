import React from "react"
import anuj from "../../utls/img/Anuj.jpg"
import Button from "../common/Button"
import "./home.scss"

const Home = () => {
  return (
    <React.Fragment>
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
            <i class="fab fa-facebook-square" />
            <i class="fab fa-instagram" />
            <i class="fab fa-github" />
            <i class="fab fa-codepen" />
          </div>
          <div className="hireme">
            <Button text="Hire me" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Home
