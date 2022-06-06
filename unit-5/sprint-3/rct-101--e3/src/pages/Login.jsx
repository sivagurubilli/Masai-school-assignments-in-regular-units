import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = ({children}) => {

  const {isauth,toggleauth} = useContext(AuthContext)


  return (


    <div>
      <input data-cy="login-email" />
      <input data-cy="login-password" />
      <button data-cy="login-submit" onClick={()=>
        toggleauth()
      }>{isauth ? "logout":"login"}</button>
    </div>
  );
};

export default Login;
