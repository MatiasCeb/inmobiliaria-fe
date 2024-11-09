import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LocatorsPage from './pages/LocatorsPage';
import AddLocatorForm from './pages/AddLocatorForm';
import AddPropertyForm from './pages/AddPropertyForm';
import Sidebar from './components/Sidebar';
import './MainApp.css'

const MainApp = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<LocatorsPage />} />
            <Route path="/locators" element={<LocatorsPage />} />
            <Route path="/add-locator" element={<AddLocatorForm />} />
            <Route path="/add-property/:locatorId" element={<AddPropertyForm />} />
            {/* <Route path="/crear-locador" element={<CrearLocador />} />
            <Route path="/eliminar-locador" element={<EliminarLocador />} />
            <Route path="/crear-property" element={<CrearProperty />} />
            <Route path="/editar-property" element={<EditarProperty />} />
            <Route path="/eliminar-property" element={<EliminarProperty />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default MainApp;
