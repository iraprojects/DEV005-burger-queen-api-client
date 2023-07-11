import "../styles/admin.css";
import { Link } from "react-router-dom";
import Top from "../Components/Top";
import Footer from "../Components/Footer";
import logoAdmin from "../assets/logo-admin.png";
import Buttons from "../Components/Button";
import ApiAdminProducts from "../Utilities/ApiAdminProducts";
import { useState } from "react";

export default function AdminProducts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    type: "",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveProduct = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch("http://localhost:8080/products", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Error al guardar el producto");
      }
      handleCloseModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Top logoUser={logoAdmin} />
      <section className="container-body-admin">
      <aside id="aside-add">
          <button id="btn-add-worker" onClick={handleOpenModal}>Añadir Producto</button>
          <h2>Productos</h2>
        </aside>
        <article className="container-item-admin">
      <div className="admin-titles" id="titles-product">
      <h2>Producto:</h2>
      <h2>Precio:</h2>
      </div>
      
      <ApiAdminProducts />

      </article>
      </section>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Añadir Producto</h2>
            <input
              type="text"
              placeholder="Nombre producto"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Precio"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <select
              value={newProduct.type}
              onChange={(e) => setNewProduct({ ...newProduct, type: e.target.value })}
            >
              <option value="desayuno">Desayuno</option>
              <option value="almuerzo">Almuerzo</option>
            </select>
            <button onClick={handleSaveProduct}>Guardar</button>
            <button onClick={handleCloseModal}>Cancelar</button>
          </div>
        </div>
      )}


      <Footer
        text={
          <>
          <Link to="/adminWorkers">
            <Buttons id="btn-admin" text="Trabajadores" />
            </Link>
            <Link to="/adminProducts">
              <Buttons id="btn-admin" text="Productos" />
            </Link>
          </>
        }
      />
    </>
  );
}