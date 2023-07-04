import { useState, useEffect } from 'react';
import AdminItem from '../Components/AdminItem';

export default function ApiAdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await fetch('http://localhost:8080/products', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error:', error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <AdminItem key={product.id} product={product} />
      ))}
    </>
  );
}