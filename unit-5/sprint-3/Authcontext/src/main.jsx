import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AuthcontextProvider  from "./context/Authcontext"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthcontextProvider>
   <App />
   </AuthcontextProvider>
    
   
   
  </React.StrictMode>
)
