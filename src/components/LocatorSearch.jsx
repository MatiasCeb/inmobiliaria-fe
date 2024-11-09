import { useState } from 'react';
import PropTypes from 'prop-types';
import TableCard from './TableCard';
import AddLocatorButton from './AddLocatorButton';
import './LocatorSearch.css';

const LocatorSearch = ({ locators }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra los locators en base al nombre o apellido que coincida con la búsqueda
  const filteredLocators = locators.filter(locator =>
    `${locator.name} ${locator.lastname}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="locator-search">
      <div>
        <AddLocatorButton/>
        <input
          type="text"
          placeholder="Buscar por nombre o apellido..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="table-card-container">
        {filteredLocators.map(locator => (
          <TableCard key={locator.id} locator={locator} />
        ))}
        {filteredLocators.length === 0 && (
          <p className="no-results">No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};

export default LocatorSearch;

LocatorSearch.propTypes = {
  locators: PropTypes.array
};
