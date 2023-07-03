import React, { useEffect, useState } from "react";
import OrderHeader from "../Components/OrderHeader";
import OrderContent from "../Components/OrderContent";
import OrderCheck from "../Components/OrderCheck";

export default function ApiSowOrders() {
  const [orders, setOrders] = useState([]);
  const [selectedClient, setSelectedClient] = useState('');

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
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const selectedClient = localStorage.getItem('selectedClient');
    setSelectedClient(selectedClient);
    console.log('Cliente seleccionado:', selectedClient);
  }, []);

  const handleClientClick = (selectedCliente) => {
    localStorage.setItem('selectedClient', selectedCliente);
    setSelectedClient(selectedCliente);
  };

  const handleCheckChange = async (orderId, newCheckValue) => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await fetch(`http://localhost:8080/orders/${orderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...orders.find((order) => order.id === orderId),
          status: newCheckValue ? "delivering" : "pending",
        }),
      });

      if (response.ok) {
        const updatedOrders = orders.map((order) => {
          if (order.id === orderId) {
            return { ...order, status: newCheckValue ? "delivering" : "pending" };
          }
          return order;
        });
        setOrders(updatedOrders);
      } else {
        console.log("Error al actualizar el estado del pedido:", response.status);
      }
    } catch (error) {
      console.log("Error de conexión:", error);
    }
  };

  return (
    <div className="orderClient">
      {orders.map((orderItem) => (
        <div key={orderItem.id}>
          {selectedClient && selectedClient === orderItem.client && (
            <>
              <OrderHeader client={orderItem.client} />
              {orderItem.products.map((productItem) => (
                <OrderContent
                  key={productItem.product.id}
                  order={productItem.product.name}
                  qty={productItem.qty}
                />
              ))}
              <div className="order-content">
              {/* <p className={orderItem.status === "delivering" ||orderItem.status === "delivered" ? "order-status-true" : "order-status-false"}> Status: {orderItem.status} </p> */}
              <p className={orderItem.status === "delivering" ||orderItem.status === "delivered" ? "order-status-true" : "order-status-false"}> {orderItem.status === "delivering" || orderItem.status === "delivered" ? "Entregado" : "Pendiente"} </p>
              
              {/* <p  className="content-element">Date Entry: {orderItem.dataEntry}</p> */}
              </div>
              <OrderCheck
                check={orderItem.status === "delivering"}
                onCheckChange={(newCheckValue) => handleCheckChange(orderItem.id, newCheckValue)}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
