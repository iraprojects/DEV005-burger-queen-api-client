// import "../App.css";
import "../styles/cheforders.css";
import Top from "../Components/Top";
import Orders from "../Components/Orders";
import Footer from "../Components/Footer";
import Buttons from "../Components/Button";
import logoChef from "../assets/logo-chef.png";

function Chef() {
  return (
    <>
      <div id="container-orders">
        <Top user="Chayane" logoUser={logoChef} />
        <div className="title-orders">
          <h2>Nombre Cliente</h2>
          <h2>Mesa</h2>
          <h2>
            Hora ingreso<br />de pedido</h2>
        </div>
        <Orders cliente="Chayane" mesa="Vip" ingreso="altoke" />
      </div>

      <Footer
        text={
          <>
            <Buttons text="Ver Pedidos" /* className="footer-button" */ />
            <Buttons text="Pedidos Listos" /* className="footer-button" */ />
          </>
        }
      />
    </>
  );
}

export default Chef;
