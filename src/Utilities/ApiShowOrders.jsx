import React, { useEffect, useState } from "react";
import OrderHeader from "../Components/OrderHeader";
import OrderContent from "../Components/OrderContent";
import ApiOrders from "./ApiOrders";

export default function ApiSowOrders({ order, setOrder }) {
  const [orders, setOrders] = useState([]);
  const [client, setClient] = useState({ id: 1, client: 'Cliente 1' });

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

  return (
    <div>
      {Array.isArray(orders) &&
        orders.map((orderItem) => (
          <div key={orderItem.id}>
            {orderItem.products.map((productItem) => (
            <OrderContent
                order={productItem.product.name}
            />
            ))}
          </div>
        ))}
    </div>
  );
}