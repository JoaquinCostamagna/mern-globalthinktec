import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import handleRequestError from './utils/requestErrorHandler.ts';

const SERVER_URL = import.meta.env.VITE_BASE_URL;
const API_PORT = import.meta.env.VITE_API_PORT;

// Axios interceptor to set the base URL of the API
axios.interceptors.request.use(function (config) {
  config.baseURL = `${SERVER_URL}${API_PORT}`
  return config
});

// Axios interceptor to handle request errors
axios.interceptors.response.use(undefined, error => {
  handleRequestError(error);
  return Promise.reject(error)
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <ToastContainer 
      position="top-right"
      theme='colored'
      autoClose={5000}
      newestOnTop
      closeOnClick
      pauseOnHover
    />
  </React.StrictMode>,
)
