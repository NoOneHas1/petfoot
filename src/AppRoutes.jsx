import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistroUsuario from './pages/Login/registro.usario/index1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registro" element={<RegistroUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
