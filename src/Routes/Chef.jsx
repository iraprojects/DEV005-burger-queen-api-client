// import "../App.css";
import "../styles/cheforders.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Top from "../Components/Top";
import Orders from "../Components/Orders";
import TitleOrders from "../Components/TitleOrders";
import Footer from "../Components/Footer";
import Buttons from "../Components/Button";
import logoChef from "../assets/logo-chef.png";
import ApiOrders from "../Utilities/ApiOrders";

function Chef() {
  const [selectedPedido, setSelectedPedido] = useState("pedidos");

  const handlePedidoClick = (pedido) => {
    setSelectedPedido(pedido);
  };

  return (
    <>
      {selectedPedido === "pedidos" ? (
        <div id="container-orders">
          <Top logoUser={logoChef} />
          <TitleOrders />
          <Link to="/showOrder"> 
            <ApiOrders />
          </Link>
        </div>
      ) : (
        <div id="container-orders">
          <Top logoUser={logoChef} />
          <TitleOrders titleEntrega="Hora Entrega"/>
          <ApiOrders />
        </div>
      )}

      <Footer
        text={
          <>
            <Buttons
              id={'btn-chef'}
              text="Ver Pedidos"
              onClick={() => handlePedidoClick('pedidos')}
              active={selectedPedido === 'pedidos'}
            />
            <Buttons
              id={'btn-chef'}
              text="Pedidos Listos"
              onClick={() => handlePedidoClick('listos')}
              active={selectedPedido === 'listos'}
            />
          </>
        }
      />
    </>
  );
}

export default Chef;