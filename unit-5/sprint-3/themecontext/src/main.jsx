import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemecontextProvider from './context/Themecontext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemecontextProvider>
<App/>

    </ThemecontextProvider>
    
  </React.StrictMode>
)
