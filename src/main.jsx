import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import App from './Routes/Login.jsx'
import Mesero from './Routes/Mesero.jsx'
import Chef from './Routes/Chef.jsx'
import './index.css'
import {createHashRouter, RouterProvider} from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/mesero',
    element: <Mesero />
  },
  {
    path: '/chef',
    element: <Chef />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
      {/* <App /> */}
  </React.StrictMode>,
)
