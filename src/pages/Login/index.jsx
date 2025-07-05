import { useState } from 'react';
import './index.css';
import loginApi from '../../api/login';

const Login = () => {
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    loginApi(email, password)
      .then((response) => {
        alert('Inicio de sesión exitoso');
        console.log('Respuesta del servidor:', response);
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
      });
  };

  return (
    <>
      <h1>Bienvenido Usuario</h1>

      <div className="login-container">
        <h2>Iniciar sesión</h2>
        <form className="login-form">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-button" onClick={handleSubmit}>Entrar</button>
        </form>
      </div>
    </>
  );
}

export default Login