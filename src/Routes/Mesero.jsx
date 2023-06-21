import "../styles/mesero.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import FoodRow from "../Components/foodRow";
import Top from "../Components/Top";
import Footer from "../Components/Footer";
import Buttons from "../Components/Button";
import Orders from "../Components/Orders";
import TitleOrders from "../Components/TitleOrders";
import LogoMesero from "../assets/logo-mesero.png";
import { BarDescription } from "../Components/BarDescription";

export default function Meseros() {
    const [selectedMenu, setSelectedMenu] = useState("desayuno");

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
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

                {selectedMenu === "desayuno" ? (
                    <>
                        <BarDescription text={"Desayunos"} />
                        <FoodRow text="Café Americano" price="$5" />
                        <FoodRow text="Café con leche" price="$7" />
                        <FoodRow text="Sándwich de jamón y queso" price="$10" />
                        <FoodRow text="Jugo de frutas natural" price="$7" />

                        <Link to={'/order'}>
                            <Buttons text={"Generar Orden"} id={"btn-order"} />
                        </Link>
                    </>
                ) : selectedMenu === "almuerzo" ? (
                    <>
                        <BarDescription text={"Hamburguesas"} />
                        <FoodRow text="Hamburguesa Simple" price="$10" />
                        <FoodRow text="Hamburguesa Doble" price="$15" />

                        <BarDescription text={"Acompañamientos"} />
                        <FoodRow text="Aros de cebolla" price="$5" />
                        <FoodRow text="Papas Fritas" price="$5" />

                        <BarDescription text={"Bebidas"} />
                        <FoodRow text="Agua 500ml" price="$5" />
                        <FoodRow text="Agua 700ml" price="$7" />
                        <FoodRow text="Bebida/Gaseosa 500ml" price="$7" />
                        <FoodRow text="Bebida/Gaseosa 700ml" price="$10" />
                        
                        <Link to={'/order'}> 
                            <Buttons text={"Generar Orden"} id={"btn-order"}/>
                        </Link>
                    </>
                ) : null}
            
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

{
    /* <Link to='/' className='link-out'>Cerrar Sesión</Link>  */
}
