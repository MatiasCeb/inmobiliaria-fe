import { useNavigate } from 'react-router-dom';
import './AddRenterButton.css';

const AddRenterButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add-renter');
  };

  return (
    <button onClick={handleClick} className="add-locator-button">
      Agregar Nuevo Locatario
    </button>
  );
};

export default AddRenterButton;
