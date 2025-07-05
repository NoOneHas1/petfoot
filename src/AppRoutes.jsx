import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/index.jsx';
import Users from './pages/Users/index.jsx';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={< Users/>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
