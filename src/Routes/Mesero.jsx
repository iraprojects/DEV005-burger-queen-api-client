import '../styles/breakfast.css';
import { Link } from 'react-router-dom';
import FoodRow from '../Components/foodRow';
import Top from '../Components/Top';
import '../App.css';
import Footer from '../Components/Footer';

export default function Route() {
    return <>
    {/* <h2>Mesero</h2> */}
    <Top />
    <div className='gray-container'>
        <div className='container-h2'>
            <h2 className='text-h2'>Menu Desayuno</h2>
        </div>
        <div className='container-foodRow'>
            <FoodRow text="Café Americano" price='$5'/>
        </div>
        <div className='container-foodRow'>
            <FoodRow text="Café con leche" price='$7'/>
        </div>
    </div>

    <Link to='/' className='link-out'>Cerrar Sesión</Link>
    <Footer />
    </>
}