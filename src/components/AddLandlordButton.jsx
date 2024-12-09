import { useNavigate } from 'react-router-dom';
import './AddLandlordButton.css';

const AddLandlordButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add-landlord');
  };

  return (
    <button onClick={handleClick} className="add-locator-button">
      Agregar Nuevo Locator
    </button>
  );
};

export default AddLandlordButton;
