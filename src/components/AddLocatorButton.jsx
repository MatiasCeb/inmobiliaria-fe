import { useNavigate } from 'react-router-dom';
import './AddLocatorButton.css';

const AddLocatorButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add-locator');
  };

  return (
    <button onClick={handleClick} className="add-locator-button">
      Agregar Nuevo Locator
    </button>
  );
};

export default AddLocatorButton;
