import "../styles/admin.css";
import { Link } from "react-router-dom";
import Top from "../Components/Top";
import Footer from "../Components/Footer";
import logoAdmin from "../assets/logo-admin.png";
import Buttons from "../Components/Button";
import ApiWorkers from "../Utilities/ApiWorkers";
import { useState } from "react";

export default function AdminWorkers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Error al guardar el usuario");
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
          <button id="btn-add-worker" onClick={handleOpenModal}>Añadir Trabajador</button>
          <h2>Trabajadores</h2>
        </aside>
        <article className="container-item-admin">
          <div className="admin-titles">
            <h2 id="h2-email">Correo</h2>
            <h2>Cargo</h2>
          </div>

          <ApiWorkers />

        </article>
      </section>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Añadir Trabajador</h2>
            <input
              type="text"
              placeholder="Correo electrónico"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              <option value="waiter">Waiter</option>
              <option value="chef">Chef</option>
              <option value="admin">Admin</option>
            </select>
            <button onClick={handleSaveClick}>Guardar</button>
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
