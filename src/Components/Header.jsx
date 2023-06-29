import Logo from '../assets/logo.png'

export default function Header() {
  return (
    <>
      <img className="logo" src={Logo} alt="Logo" />
      <h1>Burger Queen</h1>
      <h2>Inicio de Sesión</h2>
    </>
  );
}