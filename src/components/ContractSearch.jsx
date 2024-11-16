import { useState } from 'react';
import PropTypes from 'prop-types';
import ContractCard from './ContractCard';
import AddContractButton from './AddContractButton';
import './LocatorSearch.css';

const ContractSearch = ({ contracts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra los locators en base al nombre o apellido que coincida con la búsqueda
  const filteredContracts = contracts.filter(contract =>
    `${contract.id}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="locator-search">
      <div>
        <AddContractButton/>
        <input
          type="text"
          placeholder="Buscar por nombre o apellido..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="table-card-container">
        {filteredContracts.map(contract => (
          <ContractCard key={contract.id} contract={contract} />
        ))}
        {filteredContracts.length === 0 && (
          <p className="no-results">No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};

export default ContractSearch;

ContractSearch.propTypes = {
  contracts: PropTypes.array
};
