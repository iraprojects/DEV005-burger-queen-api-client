import '../App.css';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Components/Input';
import Buttons from '../Components/Button';
import { Navigate } from 'react-router-dom';

function Login() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirectToMesero, setRedirectToMesero] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    const { email, password } = values;

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.accessToken;
        console.log(token);
        resetForm();
        // setIsAuthenticated(true);
        setRedirectToMesero(true);
      } else {
        if (response.status === 400) {
          console.error('Error: Se requiere correo y contraseña');
        } else if (response.status === 404) {
          console.error('Error: Credenciales incorrectas');
        } else {
          console.error('Error en la solicitud');
        }
      }
    } catch (error) {
      console.error('Error: No se pudo conectar al servidor');
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Correo electrónico requerido'),
    password: Yup.string().required('Contraseña requerida'),
  });

  if (redirectToMesero) {
    return <Navigate to="/mesero" />;
  }

  return (
    <>
      <img className="logo" src="./src/assets/logo.png" alt="Logo" />
      <h1>Burger Queen</h1>
      <h2>Inicio de Sesión</h2>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="inputs-form">
            <Input name="email" type="email" placeholder="Correo electrónico" />
            <Input name="password" type="password" placeholder="Contraseña" />
          </div>

          <Buttons text="Ingresar" />

        </Form>
      </Formik>

      <footer>
        <p>Derechos reservados ® Burger Queen</p>
      </footer>
    </>
  );
}

export default Login;
// grace.hopper@systers.xyz