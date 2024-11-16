import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './TableCard.css';

const ContractCard = ( {contract} ) => {
  const navigate = useNavigate();
  console.log(contract);

  const handleViewContract = () => {
    navigate(`/contracts/${contract.id}`);
  };

  return (
    <div className="table-card">
      <div className="table-card-header">
        <h3>{contract.id}</h3>
      </div>
      <p>Locador: {contract.locator.name}</p>
      <p>Locatario: {contract.renter.name}</p>
      <p>Propiedad: {contract.property.name}</p>
      <button onClick={handleViewContract}>Ver Contrato</button>
    </div>
  );
};

export default ContractCard;

ContractCard.propTypes = {
    contract: PropTypes.object
  };