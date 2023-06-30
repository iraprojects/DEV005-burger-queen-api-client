import React, { useEffect, useState } from "react";
import OrderHeader from "../Components/OrderHeader";
import OrderContent from "../Components/OrderContent";

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

  return (
    <div className="orderClient">
      {orders.map((orderItem) => (
        <div key={orderItem.id}>
          {selectedClient && selectedClient == orderItem.client && (
            <>
              <OrderHeader client={orderItem.client} />
              {orderItem.products.map((productItem) => (
                <OrderContent
                  key={productItem.product.id}
                  order={productItem.product.name}
                  qty={productItem.qty}
                  status={orderItem.status}
                  dateEntry={orderItem.dataEntry}
                />
              ))}
              {/* <p>Status: {orderItem.status}</p>
              <p>Date Entry: {orderItem.dataEntry}</p> */}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
