import "../styles/show-order.css";
import React from "react";
import { useNavigate  } from "react-router-dom";
import Top from "../Components/Top";
import Footer from "../Components/Footer";
import Buttons from "../Components/Button";
import OrderHeader from "../Components/OrderHeader";
import OrderContent from "../Components/OrderContent";
import logoChef from "../assets/logo-chef.png";
import ApiSowOrders from "../Utilities/ApiShowOrders";

function ShowOrder() {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    return navigate("/chef");
  };

  return (
    <>
      <Top user="Mr Chefsin" logoUser={logoChef} />
      <div className="body-show-order">
        <div className="gray-container2">
          <ApiSowOrders />
          
        </div>

        <div className="gray-container2">
          <OrderHeader noteOrder="Notas del Pedido" />
          <OrderContent text="con crema" />
        </div>
      </div>
      <Footer
        text={
          <>
            <Buttons
              id="btn-chef"
              text="⏎"
              onClick={handleReturnClick}
            />
          
            <Buttons
              id="btn-chef"
              text="Pedidos Listos"
            />
          </>
        }
      />
    </>
  );
}

export default ShowOrder;
