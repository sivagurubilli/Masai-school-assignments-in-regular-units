import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import axios from "axios"

import {store} from "./redux/store"

axios.defaults.url= "http://localhost:8080"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

<App />

    </Provider>
   
  </React.StrictMode>
)
