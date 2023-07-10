import React, { useState } from 'react';
import { updateUser } from '../Utilities/UpdateApiWorkers';

export default function AdminItem({ worker, product }) {
  const { name: workerName, email, contactNumber, role } = worker || {};
  const { name: productName, price } = product || {};
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedRole, setEditedRole] = useState(role);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    console.log(worker.id, worker.email, worker.role);
    updateUser(worker.id, editedEmail, editedRole);
    setIsEditing(false);
  };


  const handleCancelClick = () => {
    setIsEditing(false);
    // Aquí puedes revertir los cambios si es necesario
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const Modal = ({ onClose }) => {
    if (!onClose) {
      return null;
    }

    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Detalles</h2>
          {worker && (
            <>
              {isEditing ? (
                <>
                  <p>
                    Email:
                    <input
                      type="text"
                      value={editedEmail}
                      onChange={(e) => setEditedEmail(e.target.value)}
                    />
                  </p>
                  <p>
                    Rol:
                    <select value={editedRole} onChange={(e) => setEditedRole(e.target.value)}>
                      <option value="waiter">Waiter</option>
                      <option value="chef">Chef</option>
                      <option value="admin">Admin</option>
                    </select>
                  </p>
                  <button onClick={handleSaveClick}>Guardar</button>
                  <button onClick={handleCancelClick}>Cancelar</button>
                </>
              ) : (
                <>
                  <p>Email: {email}</p>
                  <p>Rol: {role}</p>
                  <button onClick={handleEditClick}>Editar</button>
                </>
              )}
            </>
          )}
          {product && (
            <>
              <p>Nombre del producto: {productName}</p>
              <p>Precio: {price}</p>
            </>
          )}

          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {role && (
        <>
          <div className="admin-items">
            {/* <p>{worker.name}</p> */}
            <p className="item-user">{worker.email}</p>
            {/* <p>{worker.contactNumber}</p> */}
            <p className="item-user">{worker.role}</p>
            {/* <p>. . .</p> */}
            <button onClick={handleOpenModal}>Editar</button>
          </div>
        </>

      )}

      {productName && (
        <>
          <div className="admin-items">
            <p className='item-product'> {product.name}</p>
            <p className='item-product'> {product.price}</p>
            {/* <p>. . .</p> */}
            <button onClick={handleOpenModal}>probanding</button>
          </div>
        </>
      )}

      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );

}