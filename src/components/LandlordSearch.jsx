import { useState } from 'react';
import PropTypes from 'prop-types';
import TableCard from './TableCard';
import AddLandlordButton from './AddLandlordButton';
import './LandlordSearch.css';

const LandlordSearch = ({ landlords }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra los landlords en base al nombre o apellido que coincida con la búsqueda
  const filteredLandlords = landlords.filter(landlord =>
    `${landlord.name} ${landlord.lastname}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="locator-search">
      <div>
        <AddLandlordButton/>
        <input
          type="text"
          placeholder="Buscar por nombre o apellido..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="table-card-container">
        {filteredLandlords.map(landlord => (
          <TableCard key={landlord.id} landlord={landlord} />
        ))}
        {filteredLandlords.length === 0 && (
          <p className="no-results">No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};

export default LandlordSearch;

LandlordSearch.propTypes = {
  landlords: PropTypes.array
};
