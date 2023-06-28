import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import App from './Routes/Login.jsx'
import Mesero from './Routes/Mesero.jsx'
import Chef from './Routes/Chef.jsx'
import Order from './Routes/GenerateOrder.jsx'
import ShowOrder from './Routes/ShowOrder.jsx'
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
  },
  {
    path: '/order',
    element: <Order />
  },
  {
    path: '/showOrder',
    element: <ShowOrder />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
      {/* <App /> */}
  </React.StrictMode>,
)
