// import "../App.css";
import "../styles/cheforders.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Top from "../Components/Top";
import TitleOrders from "../Components/TitleOrders";
import Footer from "../Components/Footer";
import Buttons from "../Components/Button";
import logoChef from "../assets/logo-chef.png";
import ApiOrders from "../Utilities/ApiOrders";

function Chef() {
  const [selectedPedido, setSelectedPedido] = useState("pedidos");
  const [showReadyOrders, setShowReadyOrders] = useState(false);
  const [showPendingOrders, setShowPendingOrders] = useState(false);

  const handlePedidoClick = (pedido) => {
    setSelectedPedido(pedido);
  };

  const handleReadyOrdersClick = () => {
    handlePedidoClick('listos')
    setShowReadyOrders(true);
    setShowPendingOrders(true);
  };

  return (
    <>
      {selectedPedido === "pedidos" ? (
        <div id="container-orders">
          <Top logoUser={logoChef} />
          <TitleOrders servido="Estado"/>
          <Link to="/showOrder"> 
            <ApiOrders showPendingOrders={showPendingOrders}/>
          </Link>
        </div>
      ) : (
        <div id="container-orders">
          <Top logoUser={logoChef} />
          <TitleOrders titleEntrega="Hora Entrega" servido="Estado"/>
          <ApiOrders showReadyOrders={showReadyOrders} />
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
              // onClick={() => handlePedidoClick('listos')}
              onClick={handleReadyOrdersClick}
              active={selectedPedido === 'listos'}
            />
          </>
        }
      />
    </>
  );
}

export default Chef;