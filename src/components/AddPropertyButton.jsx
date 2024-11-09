import { useNavigate } from 'react-router-dom';
import './AddPropertyButton.css';

const AddPropertyButton = ({ id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/add-property/${id}`);
  };

  return (
    <button onClick={handleClick} className="add-property-button">
      Agregar Propiedad
    </button>
  );
};

export default AddPropertyButton;
