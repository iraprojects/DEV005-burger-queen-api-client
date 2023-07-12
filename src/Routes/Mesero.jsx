import "../styles/mesero.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
import React, { useEffect, useState } from "react";
import CircularJSON from 'circular-json';
import Top from "../Components/Top";
import Footer from "../Components/Footer";
import Buttons from "../Components/Button";
import Orders from "../Components/Orders";
import TitleOrders from "../Components/TitleOrders";
import LogoMesero from "../assets/logo-mesero.png";
import { BarDescription } from "../Components/BarDescription";
import ApiProducts from "../Utilities/ApiProducts";
import ApiOrders from "../Utilities/ApiOrders";

export default function Meseros() {
	const [selectedMenu, setSelectedMenu] = useState("desayuno");
	const [saveOrders, setSaveOrders] = useState([]);
	const [showReadyOrders, setShowReadyOrders] = useState(false);

	const handleMenuClick = (menu) => {
		setSelectedMenu(menu);
	};

	const handleReadyOrdersClick = () => {
		handleMenuClick("pedidos")
		setShowReadyOrders(true);
	};

	const handleGenerateOrder = (order) => {
		const existingOrder = saveOrders.find(
			(o) => o.text === order.text && o.price === order.price
		);

		if (existingOrder) {
			const updatedOrders = saveOrders.map((o) => {
				if (o.text === order.text && o.price === order.price) {
					return {
						...o,
						amount: order.amount
					};
				}
				return o;
			});

			setSaveOrders(updatedOrders);
		} else {
			setSaveOrders((prevOrders) => [...prevOrders, order]);
		}
	};

	useEffect(() => {
		try {
			const jsonData = CircularJSON.stringify(saveOrders);
			localStorage.setItem('saveOrders', jsonData);
		} catch (error) {
			console.error('Error parsing JSON:', error);
		}
	}, [saveOrders]);

	return (
		<>
			<Top logoUser={LogoMesero} />

			<div className="gray-container" style={selectedMenu === "pedidos" ? { backgroundColor: 'transparent' } : null}>
				{selectedMenu === "desayuno" && (
					<>
						<BarDescription text={"Desayunos"} />
						<ApiProducts typeFoodFilter={'Desayuno'} onGenerateOrder={handleGenerateOrder} />

						<Link to="/order">
							<Buttons text={"Generar Orden"} id={"btn-order"} onClick={handleGenerateOrder} />
						</Link>
					</>
				)}

				{selectedMenu === "almuerzo" && (
					<>
						<BarDescription text={"Hamburguesas"} />
						<ApiProducts typeFoodFilter={"Almuerzo"} onGenerateOrder={handleGenerateOrder} />

						<Link to="/order">
							<Buttons text={"Generar Orden"} id={"btn-order"} onClick={handleGenerateOrder} />
						</Link>
					</>
				)}

				{selectedMenu === 'pedidos' && (
					<>
						<TitleOrders id={'id-tittle-waiter'} titleEntrega="Hora Entrega" servido="Servido" />
						<ApiOrders showReadyOrders={showReadyOrders} showCheckbox={true} />
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
							// onClick={() => handleMenuClick("pedidos")}
							onClick={handleReadyOrdersClick}
							active={selectedMenu === "pedidos"}
						/>
					</>
				}
			/>
		</>
	);
}
