import '../styles/mesero.css';
import '../styles/orders.css'
import Top from "../Components/Top";
import Footer from "../Components/Footer";
import LogoMesero from '../assets/logo-mesero.png'
import Buttons from '../Components/Button';
import { Navigate } from 'react-router-dom';
/* import { useState } from 'react' */

export default function Order() {

    /* const [selectedMenu, setSelectedMenu] = useState('desayuno'); */

    const handleReturnClick = () => {
        return <Navigate to="/mesero" />;
    };

    return <>
        <Top user="Chayane" logoUser={LogoMesero} />

        <div className='gray-container'>
            <input type="text" class='input-order' placeholder='Nombre del cliente' />

            <div className='container'>
                <div className='orders-container'>
                    dentro de bloque order
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eos itaque. Facere pariatur corrupti harum suscipit porro. Ipsam, eligendi velit? Debitis tenetur, consequuntur laborum omnis cum et accusamus aperiam magnam.
                </div>

            <div className='note-total-container'>
                <div className='notes-container'>
                    Notas: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure saepe reprehenderit sapiente necessitatibus aspernatur quaerat quod officiis eaque exercitationem .

                </div>
                <div className='total-container'>
                <p id='p-total'>total $50</p>
                <Buttons 
                    id={'btn-confirmOrder'}
                    text={'Confirmar'}
                    onClick={() => {console.log('orden confirmada')}}
                    />
            </div>

            </div>

            </div>

        </div>

        <Footer otherClass={'p-return'}
            text={
                <>
                    <Buttons
                        id={'btn-return'}
                        text={"↩"}
                        onClick={handleReturnClick}
                        /* active={selectedPedido === 'pedidos'} */ />
                </>
            }
        />
    </>;
}
