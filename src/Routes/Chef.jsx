// import "../App.css";
import "../styles/cheforders.css";
import { useState } from "react";
import Top from "../Components/Top";
import Orders from "../Components/Orders";
import TitleOrders from "../Components/TitleOrders";
import Footer from "../Components/Footer";
import Buttons from "../Components/Button";
import logoChef from "../assets/logo-chef.png";

function Chef() {
  const [selectedPedido, setSelectedPedido] = useState("pedidos");

  const handlePedidoClick = (pedido) => {
    setSelectedPedido(pedido);
  };

  return (
    <>
      {selectedPedido === "pedidos" ? (
        <div id="container-orders">
          <Top user="Chayane" logoUser={logoChef} />
          <TitleOrders />
          <Orders cliente="Chayane" mesa="3" ingreso="1235" />
        </div>
      ) : (
        <div id="container-orders">
          <Top user="Chayane" logoUser={logoChef} />
          <TitleOrders titleEntrega="Hora Entrega"/>
          <Orders cliente="Chayane" mesa="3" ingreso="1235" entrega="3548" />
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
