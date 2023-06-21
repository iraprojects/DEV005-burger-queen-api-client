import '../styles/mesero.css';
import '../styles/orders.css'
import Top from "../Components/Top";
import Footer from "../Components/Footer";
import LogoMesero from '../assets/logo-mesero.png'
import Buttons from '../Components/Button';
import { Link, Navigate } from 'react-router-dom';
/* import { useState } from 'react' */

export default function Order() {

    /* const [selectedMenu, setSelectedMenu] = useState('desayuno'); */

    const handleReturnClick = () => {
        return <Navigate to="/mesero" />;
    };

    return <>
        <Top user="Mesero Chayane" logoUser={LogoMesero} />

        <div className='gray-container'>
            <input type="text" class='input-order' placeholder='Nombre del cliente' autoFocus />

            <div className='container'>
                <div className='orders-container'>
                    <p className='p-client-food'>Sandwich de jamón y queso $10.</p>
                    <p className='p-client-food'>Café americano $5.</p>

                </div>

                <div className='note-total-container'>
                    <div className='notes-container'>
                        Notas: Cafe sin azúcar.

                    </div>
                    <div className='total-container'>
                        <p id='p-total'>total $15</p>
                        <Buttons
                            id={'btn-confirmOrder'}
                            text={'Confirmar'}
                            onClick={() => { console.log('orden confirmada') }}
                        />
                    </div>

                </div>

            </div>

        </div>

        <Footer otherClass={'p-return'}
            text={
                <>
                    <Link to={'/mesero'}>
                        <Buttons
                            id={'btn-return'}
                            text={"⏎"}
                            onClick={handleReturnClick}
                            /* active={selectedPedido === 'pedidos'} */ />
                    </Link>

                </>
            }
        />
    </>;
}
