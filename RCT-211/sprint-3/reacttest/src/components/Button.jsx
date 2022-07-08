import React from 'react'
import "./Button.css"

const Button = ({children,varient,colorscheme,onClick}) => {
  return (
    <div>

        <button className={`btn ${colorscheme|| "red"} ${varient || "ghost"}`}
        onClick ={onClick}
        >
            {children}
        </button>
    </div>
  )
}

export default Button