import React, { useEffect, useState } from "react";
import Orders from "../Components/Orders";

export default function ApiOrders({ showReadyOrders }) {
  const [ordersData, setOrdersData] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const response = await fetch("http://localhost:8080/orders", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setOrdersData(data);
        } else {
          console.log("Error al obtener los pedidos:", response.status);
        }
      } catch (error) {
        console.log("Error de conexión:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleClientClick = (selectedCliente) => {
    console.log("Cliente seleccionado:", selectedCliente);
  };

  useEffect(() => {
    if (showReadyOrders) {
      const readyOrders = ordersData.filter((order) => order.status === "delivering" || order.status === 'delivered');
      setFilteredOrders(readyOrders);
    } else {
      setFilteredOrders(ordersData);
    }
  }, [showReadyOrders, ordersData]);

  return (
    <>
      {Array.isArray(filteredOrders) &&
        filteredOrders.map((order) => (
          <Orders
            key={order.id}
            cliente={order.client}
            ingreso={order.dataEntry}
            status={order.status === "delivering" || order.status === "delivered" ? "Entregado" : "Pendiente"}
            // status={order.status}
            handleClientClick={handleClientClick}
          />
        ))}
    </>
  );
}