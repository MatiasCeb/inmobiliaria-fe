import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LocatorsPage from './pages/LocatorsPage';
import AddLocatorForm from './pages/AddLocatorForm';
import AddPropertyForm from './pages/AddPropertyForm';

const MainApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/locators" element={<LocatorsPage />} />
        <Route path="/add-locator" element={<AddLocatorForm />} />
        <Route path="/add-property/:locatorId" element={<AddPropertyForm />} />
      </Routes>
    </Router>
  );
};

export default MainApp;
