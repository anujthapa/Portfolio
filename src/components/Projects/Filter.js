import React from "react"
import "./filter.scss"

const Filter = ({ text, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}
export default Filter
