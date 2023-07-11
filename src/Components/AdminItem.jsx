import React, { useState } from 'react';
import { updateUser } from '../Utilities/UpdateApiWorkers';
import { updateProducts } from '../Utilities/UpdateApiProducts';
import { deleteProduct } from '../Utilities/DeleteApiProducts';

export default function AdminItem({ worker, product }) {
  const { email, role } = worker || {};
  // const { name: productName, price } = product || {};
  // const { name: workerName, email, contactNumber, role } = worker || {};
  const { name: productName, price, type } = product || {};
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedRole, setEditedRole] = useState(role);
  const [editedProductName, setEditedProductName] = useState(productName);
  const [editedPrice, setEditedPrice] = useState(price);
  const [editedType, setEditedType] = useState(type);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    console.log(worker.id, worker.email, worker.role);
    updateUser(worker.id, editedEmail, editedRole);
    setIsEditing(false);
  };

  const handleSaveProduct = () => {
    console.log(product.id, editedProductName, editedPrice, editedType);
    updateProducts(product.id, editedProductName, editedPrice, editedType);
    setIsEditing(false);
  };

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(product.id);
      console.log('producto eliminado:', product.id)
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
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
              {isEditing ? (
                <>
                  <p>
                    Nombre:
                    <input
                      type="text"
                      value={editedProductName}
                      onChange={(e) => setEditedProductName(e.target.value)}
                    />
                  </p>
                  <p>
                    Precio:
                    <input
                      type="text"
                      value={editedPrice}
                      onChange={(e) => setEditedPrice(e.target.value)}
                    />
                  </p>
                  <p>
                    Tipo:
                    <select value={editedType} onChange={(e) => setEditedType(e.target.value)}>
                      <option value="desayuno">Desayuno</option>
                      <option value="almuerzo">Almuerzo</option>
                    </select>
                  </p>
                  <button onClick={handleSaveProduct}>Guardar</button>
                  <button onClick={handleCancelClick}>Cancelar</button>
                </>
              ) : (
                <>
                  <p>Nombre del producto: {productName}</p>
                  <p>Precio: {price}</p>
                  <button onClick={handleEditClick}>Editar</button>
                  <button onClick={handleDeleteProduct}>Eliminar</button>
                </>
              )}
            </>
          )}
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    );
  };

  return (
    <>
      {role && (
        <>
          <div className="admin-items">
            <p className="item-user">{worker.email}</p>
            <p className="item-user" id='item-role' >{worker.role}</p>
            <button onClick={handleOpenModal}>Opciones</button>
          </div>
        </>
      )}

      {productName && (
        <>
          <div className="admin-items">
            <p className='item-product'> {product.name}</p>
            <p className='item-product'> {product.price}</p>
            <button onClick={handleOpenModal}>probanding</button>
          </div>
        </>
      )}

      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </>
  );
}