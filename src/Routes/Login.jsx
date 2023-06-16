import '../App.css';
import { Navigate } from 'react-router-dom';
import LoginForm from '../Utilities/LoginForm';
import LoginLogic from '../Utilities/LoginLogic';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Login() {
  const { redirectTo, userRole, handleSubmit } = LoginLogic();

  if (redirectTo) {
    if (userRole === 'admin') return <Navigate to="/mesero" />;
    if (userRole === 'waiter') return <Navigate to="/mesero" />;
    if (userRole === 'chef') return <Navigate to="/chef" />;
  }

  return (
    <>
      <Header />
      <LoginForm onSubmit={handleSubmit} />
      <Footer text='Derechos reservados ® Burger Queen'/>
    </>
  );
}

export default Login;
// grace.hopper@systers.xyz