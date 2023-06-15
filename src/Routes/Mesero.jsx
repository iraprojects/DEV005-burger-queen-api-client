import { Link } from 'react-router-dom';

export default function Route() {
    return <>
    {/* <h2>Mesero</h2> */}
    <h2>Sistema de pedidos</h2>

    <Link to='/' className='link-out'>Cerrar Sesión</Link>
    </>
}