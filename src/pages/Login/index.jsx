import { useState } from 'react';
import './index.css';
import loginApi from '../../api/login';
import logo from '../../assets/images/logo.png';

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

  const redirectToRegister = () => {
    // Aquí puedes implementar la lógica para redirigir al usuario a la página de registro
    alert('Redirigiendo a la página de registro...');
  };

  return (
    <>
      <div className="login-main-container">
        <div className="login-left-panel">
          <img src={logo} alt="PetFoot" className="login-logo" />
          <h2>Inicia sesión en PetFoot</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-icon-group">
              <span className="icon email-icon" />
              <input
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="login-input"
              />
            </div>
            <div className="input-icon-group">
              <span className="icon password-icon" />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login-input"
              />
            </div>
            <button type="submit" className="login-button">Iniciar sesión</button>
            <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
          </form>
        </div>
        <div className="login-right-panel">
          <h2>Hola, Amigo!</h2>
          <p>Ingresa tus datos y empieza ahora</p>
          <button className="register-button" onClick={redirectToRegister}>Registrarse</button>
          <button className="vet-button">Soy veterinario</button>
        </div>
      </div>
    </>
  );
}

export default Login