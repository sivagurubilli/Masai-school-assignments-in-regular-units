import React from 'react'
import axios from "axios"
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from "react-redux"
import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.headers.post["Content-Type"] ="application/json"

ReactDOM.createRoot(document.getElementById('root')).render(

     <BrowserRouter>
    <Provider store={store}>
     
      
     
    <App />
    </Provider>
    </BrowserRouter>

)
