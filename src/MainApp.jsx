import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LocatorsPage from './pages/LocatorsPage';
import AddLocatorForm from './pages/AddLocatorForm';
import AddPropertyForm from './pages/AddPropertyForm';
import DeleteLocator from './pages/DeleteLocator';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './MainApp.css'
import EditLocatorForm from './pages/EditLocatorForm';
import PropertiesPage from './pages/PropertiesPage';
import DeleteProperty from './pages/DeleteProperty';
import EditPropertyForm from './pages/EditPropertyForm';
import ContractsPage from './pages/ContractsPage';
import NewContractForm from './pages/NewContractForm';
import ContractViewPage from './pages/ContractViewPage';

const MainApp = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<LocatorsPage />} />
            <Route path="/locators" element={<LocatorsPage />} />
            <Route path="/add-locator" element={<AddLocatorForm />} />
            <Route path="/edit-locator/:locatorId" element={<EditLocatorForm />} />
            <Route path="/add-properties/:locatorId" element={<AddPropertyForm />} />
            <Route path="/locators/delete/:locatorId" element={<DeleteLocator />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/edit-property/:propertyId" element={<EditPropertyForm />} />
            <Route path="/properties/delete/:propertyId" element={<DeleteProperty />} />
            <Route path="/contracts" element={<ContractsPage />} />
            <Route path="/add-contract" element={<NewContractForm />} />
            <Route path="/contracts/:id" element={<ContractViewPage />} />
            {/* TODO: pagina de traer lista de propiedades con buscador. Opcional: replicar de LocatorsPage*/}
            {/* <Route path="/crear-locador" element={<CrearLocador />} />
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
