import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import axios from 'axios'

axios.interceptors.request.use(function (config) {
  config.baseURL = 'http://localhost:5000'
  return config
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
