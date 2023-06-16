import '../App.css';
import '../styles/cheforders.css';
import Top from '../Components/Top';
import Orders from '../Components/Orders';
import Footer from '../Components/Footer';

function Chef() {

    return (
        <>
          <Top />
          <div className='titulOrders'>
      <h2>Nombre Cliente</h2>
      <h2>Mesa</h2> 
      <h2>Hora Ingreso</h2>

      </div>
          <Orders cliente='Chayane' mesa='Vip' ingreso='altoke' />
          <Footer />
        </>
      );
    }
    
    export default Chef;
