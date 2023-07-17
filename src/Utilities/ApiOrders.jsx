import React, { useEffect, useState } from "react";
import Orders from "../Components/Orders";

export default function ApiOrders({ showReadyOrders, showPendingOrders, showCheckbox, showBtn  }) {
  const [ordersData, setOrdersData] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const response = await fetch("https://burger-queen-api-mock-production-b29d.up.railway.app/orders", {
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

  const updateOrderStatus = async (orderId, newStatus) => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await fetch(`https://burger-queen-api-mock-production-b29d.up.railway.app/orders/${orderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...ordersData.find((order) => order.id === orderId),
          status: newStatus ? "delivered" : "delivering",
        }),
      });

      if (response.ok) {
        const updatedOrders = ordersData.map((order) => {
          if (order.id === orderId) {
            return { ...order, status: newStatus ? "delivered" : "delivering" };
          }
          return order;
        });
        setOrdersData(updatedOrders);
      } else {
        console.log("Error al actualizar el estado del pedido:", response.status);
      }
    } catch (error) {
      console.log("Error de conexión:", error);
    }
  };

  const handleCheckboxChange = (orderId, newCheckValue) => {
    const newStatus = newCheckValue ? "delivered" : "pending";
    updateOrderStatus(orderId, newStatus);
  };

  useEffect(() => {
    if (showReadyOrders && showPendingOrders) {
      const readyOrders = ordersData.filter((order) => order.status === "delivering" || order.status === "pending");
      setFilteredOrders(readyOrders);
    } else if (showReadyOrders) {
      const readyOrders = ordersData.filter((order) => order.status === "delivering");
      setFilteredOrders(readyOrders);
    } else if (showPendingOrders) {
      const pendingOrders = ordersData.filter((order) => order.status === "pending");
      setFilteredOrders(pendingOrders);
    } else {
      const pendingOrders = ordersData.filter((order) => order.status === "pending");
      setFilteredOrders(pendingOrders);
    }
  }, [showReadyOrders, showPendingOrders, ordersData]);
  

  return (
    <>
      {Array.isArray(filteredOrders) &&
        filteredOrders.map((order) => (
          <Orders
            key={order.id}
            cliente={order.client}
            ingreso={order.dataEntry}
            status={
              order.status === "delivering"
                ? "Entregando"
                : order.status === "delivered"
                ? "Entregado"
                : "Pendiente"
            }
            orderId={order.id}
            // status={order.status}
            showCheckbox={showCheckbox}
            handleClientClick={handleClientClick}
            updateOrderStatus={updateOrderStatus}
            btnOption={showBtn}
          />
        ))}
    </>
  );
}