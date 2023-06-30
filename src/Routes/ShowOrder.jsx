import "../styles/show-order.css";
import React from "react";
import { Link } from "react-router-dom";
import Top from "../Components/Top";
import Footer from "../Components/Footer";
import Buttons from "../Components/Button";
import OrderHeader from "../Components/OrderHeader";
import OrderContent from "../Components/OrderContent";
import OrderCheck from "../Components/OrderCheck";
import logoChef from "../assets/logo-chef.png";
import ApiSowOrders from "../Utilities/ApiShowOrders";

function ShowOrder() {
  /*   const handlePedidoClick = (pedidoType) => {
    // Implementa la lógica para manejar el clic en los botones de pedido aquí
  }; */

  /*   const handleReturnClick = () => {
    // Implementa la lógica para manejar el clic en el botón de retorno aquí
  }; */

  return (
    <>
      <Top user="Mr Chefsin" logoUser={logoChef} />
      <div className="body-show-order">
      <div className="gray-container2">
          <ApiSowOrders/>
          <OrderCheck />
        </div>

        <div className="gray-container2">
          <OrderHeader noteOrder="Notas del Pedido"/>
          <OrderContent text="con crema"/>
        </div>
      </div>
      <Footer
        text={
          <>
            <Link to="/chef">
              <Buttons
                id="btn-return"
                text="⏎"
                /* onClick={handleReturnClick} */
              />
            </Link>
            <Buttons
              id="btn-chef"
              text="Pedidos Listos"
              /* onClick={() => handlePedidoClick("listos")}
              active={selectedPedido === "listos"} */
            />
          </>
        }
      />
    </>
  );
}

export default ShowOrder;
