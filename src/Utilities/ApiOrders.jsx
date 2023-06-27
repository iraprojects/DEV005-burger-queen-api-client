import React, { useEffect, useState } from "react";
import Orders from "../Components/Orders";

export default function ApiOrders() {
  const [ordersData, setOrdersData] = useState([]);
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

  return (
    <div>
      {Array.isArray(ordersData) &&
        ordersData.map((order) => (
          <Orders
            key={order.id}
            cliente={order.client}
            mesa="3"
            ingreso={order.dateEntry}
            entrega={order.dateProcessed}
          />
        ))}
    </div>
  );
}