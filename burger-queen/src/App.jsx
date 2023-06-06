// import { useState } from 'react'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <img className="logo" src= "./src/assets/logo.png"/>
     <h1>Burguer Queen</h1>
     <h2>Inicio de Sesión</h2>

     <form action="">
     <div className='inputs-form'>
        <input type="email" placeholder='Correo electrónico' required/>
        <input type="password" placeholder='Contraseña' required/>
     </div>
          
      <button className="button-form">Ingresar</button>
     </form>

    <footer>
      <p>Derechos reservados ® Burger Queen</p>
    </footer>

    </>
  )
}

export default App
