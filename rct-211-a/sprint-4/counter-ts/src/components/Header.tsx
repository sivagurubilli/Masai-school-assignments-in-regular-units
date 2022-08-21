import React from 'react'

type HeaderProps= {
 label?:string;
 children?:JSX.Element  | JSX.Element[]
 
}


const Header = ({label ="counter",children}:HeaderProps) => {
  return (
    <div>
        {children}
        <h1>{label}</h1>


    </div>
  )
}

export default Header