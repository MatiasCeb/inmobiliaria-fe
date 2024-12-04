import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showLocatorsSubmenu, setShowLocatorsSubmenu] = useState(false);
  const [showPropertiesSubmenu, setShowPropertiesSubmenu] = useState(false);
  const [showContractsSubmenu, setShowContractsSubmenu] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="collapse-btn" onClick={toggleCollapse}>
        {isCollapsed ? '→' : '←'}
      </button>
      {!isCollapsed && (
        <>
          <h2>Menú</h2>
          <div className="menu-item">
            {/* TODO:  que al hacer click tambien redirija a la pantalla de listado de Locators. Parcial: sumar un menu de listado dentro del submenu*/}
            <button onClick={() => setShowLocatorsSubmenu(!showLocatorsSubmenu) }>
              Locators
            </button>
            {showLocatorsSubmenu && (
              <div className="submenu">
                <Link to="/locators">Lista de Locadores</Link>
                <Link to="/add-locator">Crear Locador</Link>
              </div>
            )}
          </div>
          <div className="menu-item">
            {/* TODO:  que al hacer click tambien redirija a la pantalla de listado de Properties. Parcial: sumar un menu de listado dentro del submenu*/}
            <button onClick={() => setShowPropertiesSubmenu(!showPropertiesSubmenu)}>
              Properties
            </button>
            {showPropertiesSubmenu && (
              <div className="submenu">
                <Link to="/properties">Lista de Propiedades</Link>
              </div>
            )}
          </div>
          <div className="menu-item">
            {/* TODO:  que al hacer click tambien redirija a la pantalla de listado de Locators. Parcial: sumar un menu de listado dentro del submenu*/}
            <button onClick={() => setShowContractsSubmenu(!showContractsSubmenu) }>
              Contratos
            </button>
            {showContractsSubmenu && (
              <div className="submenu">
                <Link to="/contracts">Lista de contratos</Link>
                <Link to="/add-contract">Crear Contrato</Link>
                {/* <Link to="/edit-contract">Editar Contrato</Link>
                <Link to="/delete-contract">Eliminar Contrato</Link> */}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
