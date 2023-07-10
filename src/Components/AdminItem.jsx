import React, { useState } from 'react';

export default function AdminItem({ worker, product }) {
  const { name: workerName, email, contactNumber, role } = worker || {};
  const { name: productName, price } = product || {};


  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <h2>El terrible modal</h2>
          <p>holiwi</p>
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
    <button onClick={handleOpenModal}>probanding</button>
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