import { useNavigate } from 'react-router-dom';
import './AddLocatorButton.css';

const AddContractButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add-contract');
  };

  return (
    <button onClick={handleClick} className="add-locator-button">
      Agregar Nuevo Contrato
    </button>
  );
};

export default AddContractButton;
