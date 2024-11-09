import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="../src/assets/logo.png" alt="App Logo" className="navbar-logo" />
        <span className="navbar-app-name">Inmobiliaria App</span>
      </div>
      <div className="navbar-links">
        <Link to="/ajustes">Ajustes</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;