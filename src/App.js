import React, { Component } from "react"
import Navigation from "./components/navigation/Navigation"
import Home from "./components/home/Home"
import Aboutme from "./components/aboutme/Aboutme"
import Contactme from "./components/contactme/Contactme"
import Footer from "./components/footer/Footer"
import Project from "./components/Projects/Projects"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"

class App extends Component {
  StillOnProgress = () => {
    alert("This page is underconstruction")
  }
  render() {
    return (
      <div className="App">
        <Navigation />

        <Home />
        <Project />

        <Aboutme />

        <Contactme />

        <Footer />
      </div>
    )
  }
}

export default App
