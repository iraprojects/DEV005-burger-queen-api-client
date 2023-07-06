import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Logo from '../assets/logo.png';

function Modal({ isOpen, onClose, onLogout }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>¿Deseas cerrar sesión?</h2>
        <button className="close-button" onClick={onLogout}>
          Cerrar sesión
        </button>
        <button className="cancel-button" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default function Top({ logoUser }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoUserClick = () => {
    setShowLogoutModal(true);
  };

  const handleCloseModal = () => {
    setShowLogoutModal(false);
  };

  const handleLogout = () => {
    localStorage.clear(); 
    setShowLogoutModal(false);
   /*  console.log('Cerrando sesión...'); */
    window.location.href = '/';
  };

  const email = localStorage.getItem('email');
  const username = email ? email.split("@")[0].replace(/^\w/, (c) => c.toUpperCase()) : '';

  return (
    <>
      <header>
        <div id="topLeft">
          <img className="logo" id="logo-burger" src={Logo} alt="Logo" />
          <h2 id="text-logo">Burger Queen</h2>
        </div>
        <div id="topRight">
          <h2 id="text-user">{username}</h2>
          <img
            id="logo-user"
            src={logoUser}
            alt="Logo"
            onClick={handleLogoUserClick}
          />
        </div>
      </header>

      <Modal
        isOpen={showLogoutModal}
        onClose={handleCloseModal}
        onLogout={handleLogout}
      />
    </>
  );
}