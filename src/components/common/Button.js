import React from "react"
import "./button.scss"
const Button = ({
  className,
  onClick,
  onSubmit,
  onHover,
  name,
  type,
  text
}) => {
  return (
    <div className="button">
      <button
        className={className}
        onClick={onclick}
        onHover={onHover}
        onSubmit={onSubmit}
        name={name}
        type={type}
      >
        {text}
      </button>
    </div>
  )
}
export default Button
