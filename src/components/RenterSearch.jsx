import { useState } from 'react';
import PropTypes from 'prop-types';
import AddRenterButton from './AddRenterButton';
import './RenterSearch.css';
import TableCardRenter from './TableCardRenter';

//TODO: unificar componentes search
const RenterSearch = ({ renters }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra los renters en base al nombre o apellido que coincida con la búsqueda
  const filteredRenters = renters.filter(renter =>
    `${renter.name} ${renter.lastname}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="locator-search">
      <div>
        <AddRenterButton/>
        <input
          type="text"
          placeholder="Buscar por nombre o apellido..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="table-card-container">
        {filteredRenters.map(renter => (
          <TableCardRenter key={renter.id} renter={renter} />
        ))}
        {filteredRenters.length === 0 && (
          <p className="no-results">No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};

export default RenterSearch;

RenterSearch.propTypes = {
  renters: PropTypes.array
};
