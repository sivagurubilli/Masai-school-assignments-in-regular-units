import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const RequiredAuth = ({ children }) => {

  const {isauth}  = useContext(AuthContext)

  if(isauth){
    return children;
  }else{
   <Navigate to ="/login" />
  }
 
};

export default RequiredAuth;
