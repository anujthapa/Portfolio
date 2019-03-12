import React from "react"
import anuj from "../../utls/img/Anuj.jpg"
import "./home.scss"

const Home = () => {
  return (
    <div className="home box1 shadow1">
      <div className="intoduction focus">
        <span>
          <h2>Hello,I'm</h2>
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
          <button>HIRE ME</button>
        </div>
      </div>
      <div className="img">
        <img src={anuj} />
      </div>
    </div>
  )
}
export default Home
