import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/index.jsx';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
