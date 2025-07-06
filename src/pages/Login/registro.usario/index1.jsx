import React, { useState } from 'react';
import './index1.css';
import { useNavigate } from 'react-router-dom';

const RegistroUsuario = () => {
  const [form, setForm] = useState({
    nombre: '',
    tipoId: 'CC',
    identificacion: '',
    contacto: '',
    direccion: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registro simulado');
    // Aquí puedes agregar lógica para enviar el formulario a una API si deseas
  };

  const goToLogin = () => {
    navigate('/login'); // Asegúrate de tener esta ruta configurada en AppRoutes.jsx
  };

  return (
    <div className="login-main-container">
      <div className="login-left-panel">
        <h2>Bienvenido de nuevo!</h2>
        <p>¿Ya tienes cuenta?<br />Ingresa ahora</p>
        <button className="login-button" onClick={goToLogin}>Iniciar sesión</button>
      </div>
      <div className="login-right-panel">
        <h2>Crea tu cuenta</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-icon-group">
            <span className="icon user-icon" />
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              value={form.nombre}
              onChange={handleChange}
              required
              className="login-input"
            />
          </div>
          <div className="input-row">
            <select
              name="tipoId"
              value={form.tipoId}
              onChange={handleChange}
              className="login-input select-id"
            >
              <option value="CC">CC</option>
              <option value="TI">TI</option>
              <option value="CE">CE</option>
            </select>
            <input
              type="text"
              name="identificacion"
              placeholder="Número de identificación"
              value={form.identificacion}
              onChange={handleChange}
              required
              className="login-input"
            />
          </div>
          <div className="input-icon-group">
            <span className="icon phone-icon" />
            <input
              type="text"
              name="contacto"
              placeholder="Número de contacto"
              value={form.contacto}
              onChange={handleChange}
              required
              className="login-input"
            />
          </div>
          <div className="input-icon-group">
            <span className="icon location-icon" />
            <input
              type="text"
              name="direccion"
              placeholder="Dirección de residencia"
              value={form.direccion}
              onChange={handleChange}
              required
              className="login-input"
            />
          </div>
          <div className="input-icon-group">
            <span className="icon email-icon" />
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={form.email}
              onChange={handleChange}
              required
              className="login-input"
            />
          </div>
          <div className="input-icon-group">
            <span className="icon password-icon" />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={form.password}
              onChange={handleChange}
              required
              className="login-input"
            />
          </div>
          <button type="submit" className="register-button">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default RegistroUsuario;