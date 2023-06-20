// import "../App.css";
import "../styles/cheforders.css";
import Top from "../Components/Top";
import Orders from "../Components/Orders";
import TitleOrders from "../Components/TitleOrders";
import Footer from "../Components/Footer";
import Buttons from "../Components/Button";
import logoChef from "../assets/logo-chef.png";

function Chef() {
  return (
    <>
      <div id="container-orders">
        <Top user="Chayane" logoUser={logoChef} />
        <TitleOrders />
        <Orders cliente="Chayane" mesa="3" ingreso="1200" />
      </div>

      <Footer
        text={
          <>
            <Buttons
              id={'btn-chef'}
              text="Ver Pedidos"
              /* onClick={() => handleMenuClick('pedidos')}
              active={selectedPedido === 'pedidos'} */ />
            <Buttons
              id={'btn-chef'}
              text="Pedidos Listos"
              /* onClick={() => handleMenuClick('listos')}
              active={selectedPedido === 'listos'} */ />
            </>
        }
      />
    </>
  );
}

export default Chef;
