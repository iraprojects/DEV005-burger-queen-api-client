import React, { useState } from 'react';
import { updateUser } from '../Utilities/UpdateApiWorkers';
import { updateProducts } from '../Utilities/UpdateApiProducts';
import { deleteProduct } from '../Utilities/DeleteApiProducts';
import { deleteWorker } from '../Utilities/DeleteApiWorkers';

export default function AdminItem({ worker, product }) {
  const { email, role } = worker || {};
  const { name: productName, price, type } = product || {};
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedRole, setEditedRole] = useState(role);
  const [editedProductName, setEditedProductName] = useState(productName);
  const [editedPrice, setEditedPrice] = useState(price);
  const [editedType, setEditedType] = useState(type);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleSaveClick = async () => {
    if (worker) {
      await updateUser(worker.id, editedEmail, editedRole);
    } else if (product) {
      await updateProducts(product.id, editedProductName, editedPrice, editedType);
    }
    setIsModalOpen(false);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (product) {
      try {
        await deleteProduct(product.id);
        console.log('Producto eliminado:', product.id);
      } catch (error) {
        console.error('Error:', error);
      }
    } else if (worker) {
      try {
        await deleteWorker(worker.id);
        console.log('Usuario eliminado:', worker.id);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    setIsDeleteModalOpen(false);
  };

  const handleCloseModals = () => {
    setIsModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const Modal = ({ onClose }) => {
    if (!onClose) {
      return null;
    }

    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Editar</h2>
          {worker && (
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
              <button type="button" onClick={handleSaveClick}>
                Guardar
              </button>
              <button type="button" onClick={onClose}>
                Cancelar
              </button>
            </>
          )}
          {product && (
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
              <button type="button" onClick={handleSaveClick}>
                Guardar
              </button>
              <button type="button" onClick={onClose}>
                Cancelar
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  const DeleteModal = ({ onClose }) => {
    if (!onClose) {
      return null;
    }

    return (
      <div className="modal">
        <div className="modal-content">
          <h2>¿Estás seguro de que deseas eliminar?</h2>
          <button type="button" onClick={handleConfirmDelete}>
            Sí
          </button>
          <button type="button" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="admin-items">
        {worker && (
          <>
            <p className="item-user">{worker.email}</p>
            <p className="item-user" id="item-role">
              {worker.role}
            </p>
            <button type="button" onClick={handleEditClick}>
              Editar
            </button>
            <button type="button" onClick={handleDeleteClick}>
              Eliminar
            </button>
          </>
        )}
        {product && (
          <>
            <p id="id-text" className="item-product">
              {product.name}
            </p>
            <p id="id-price" className="item-product">
              {product.price}
            </p>
            <p id="id-type" className="item-product">
              {product.type}
            </p>
            <button type="button" onClick={handleEditClick}>
              Editar
            </button>
            <button type="button" onClick={handleDeleteClick}>
              Eliminar
            </button>
          </>
        )}
      </div>

      {isModalOpen && <Modal onClose={handleCloseModals} />}
      {isDeleteModalOpen && <DeleteModal onClose={handleCloseModals} />}
    </>
  );
}