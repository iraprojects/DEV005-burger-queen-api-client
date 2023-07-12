import React, { useState } from 'react';
import { updateUser } from '../Utilities/UpdateApiWorkers';
import { updateProducts } from '../Utilities/UpdateApiProducts';
import { deleteProduct } from '../Utilities/DeleteApiProducts';
import { deleteWorker } from '../Utilities/DeleteApiWorkers';

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

  const handleSaveClick = async () => {
    console.log(worker.id, worker.email, worker.role);
    await updateUser(worker.id, editedEmail, editedRole);
    // setIsEditing(false);
  };

  const handleSaveProduct = () => {
    console.log(product.id, editedProductName, editedPrice, editedType);
    updateProducts(product.id, editedProductName, editedPrice, editedType);
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

  const handleDeleteWorker = async () => {
    try {
      await deleteWorker(worker.id);
      console.log('User eliminado:', worker.id)
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
                  <button type='button' onClick={handleSaveClick}>Guardar</button>
                  <button type='button' onClick={handleCancelClick}>Cancelar</button>
                </>
              ) : (
                <>
                  <p>Email: {email}</p>
                  <p>Rol: {role}</p>
                  <button type='button' onClick={handleEditClick}>Editar</button>
                  <button type='button' onClick={handleDeleteWorker}>Eliminar</button>
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
                  <button type='button' onClick={handleSaveProduct}>Guardar</button>
                  <button type='button' onClick={handleCancelClick}>Cancelar</button>
                </>
              ) : (
                <>
                  <p>Nombre del producto: {productName}</p>
                  <p>Precio: {price}</p>
                  <p>Tipo: {type}</p>
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
            <p id='id-text' className='item-product'> {product.name}</p>
            <p id='id-price' className='item-product'> {product.price}</p>
            <p id='id-type' className='item-product'> {product.type}</p>
            <button onClick={handleOpenModal}>Opciones</button>
          </div>
        </>
      )}

      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </>
  );
}