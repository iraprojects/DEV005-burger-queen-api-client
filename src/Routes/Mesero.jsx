import "../styles/mesero.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
import React, { useState } from "react";
import FoodRow from "../Components/foodRow";
import Top from "../Components/Top";
import Footer from "../Components/Footer";
import Buttons from "../Components/Button";
import Orders from "../Components/Orders";
import TitleOrders from "../Components/TitleOrders";
import LogoMesero from "../assets/logo-mesero.png";
import { BarDescription } from "../Components/BarDescription";
import ApiProducts from "../Utilities/ApiProducts";

export default function Meseros() {
    const [selectedMenu, setSelectedMenu] = useState("desayuno");
    const [inputValues, setInputValues] = useState({
        text: "",
        price: "",
        amount: 0
    });

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    const handleGenerateOrder = () => {
        const order = {
            text: inputValues.text,
            price: inputValues.price,
            amount: inputValues.amount
        };
        console.log("Orden generada:", order);
    };

    return (
        <>
            <Top user="Mesero Chayane" logoUser={LogoMesero} />

            <div className="gray-container">
                <div className="container-h2">
                    <h2 className="text-h2">
                        {selectedMenu === "desayuno"
                            ? "Desayuno"
                            : selectedMenu === "almuerzo"
                                ? "Almuerzo"
                                : ""}
                    </h2>
                </div>
                {selectedMenu === "desayuno" && (
                    <>
                        <BarDescription text={"Desayunos"} />
                        <ApiProducts typeFoodFilter={'Desayuno'} setInputValues={setInputValues} />

                        <Link to="/order">
                            <Buttons text={"Generar Orden"} id={"btn-order"} onClick={handleGenerateOrder} />
                        </Link>
                    </>
                )}

                {selectedMenu === "almuerzo" && (
                    <>
                        <BarDescription text={"Hamburguesas"} />
                        <ApiProducts typeFoodFilter={"Almuerzo"} setInputValues={setInputValues} />

                        <Link to="/order">
                            <Buttons text={"Generar Orden"} id={"btn-order"} onClick={handleGenerateOrder} />
                        </Link>
                    </>
                )}

                {selectedMenu === 'pedidos' && (
                    <>
                        <TitleOrders titleEntrega="Hora Entrega" servido="Servido" />
                        <Orders
                            cliente="Zelda"
                            mesa="3"
                            ingreso="1200"
                            entrega="5678"
                            check="" />
                    </>
                )}
            </div>

            <Footer
                otherClass={"p-footer-mesero"}
                text={
                    <>
                        <Buttons
                            id={"btn-mesero"}
                            text="Desayuno"
                            onClick={() => handleMenuClick("desayuno")}
                            active={selectedMenu === "desayuno"}
                        />
                        <Buttons
                            id={"btn-mesero"}
                            text="Almuerzo"
                            onClick={() => handleMenuClick("almuerzo")}
                            active={selectedMenu === "almuerzo"}
                        />
                        <Buttons
                            id={"btn-mesero"}
                            text="Pedidos"
                            onClick={() => handleMenuClick("pedidos")}
                            active={selectedMenu === "pedidos"}
                        />
                    </>
                }
            />
        </>
    );
}
