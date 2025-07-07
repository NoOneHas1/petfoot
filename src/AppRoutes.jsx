import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/index.jsx';
import RegistroUsuario from './pages/Login/registro.usario/index1.jsx';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<RegistroUsuario />} />
        
      </Routes>
    </Router>
  );
}

export default AppRoutes;
