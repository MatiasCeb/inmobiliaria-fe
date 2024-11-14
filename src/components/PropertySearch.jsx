import { useState } from 'react';
import PropTypes from 'prop-types';
import PropertyCard from './PropertyCard';
import './LocatorSearch.css';

const PropertySearch = ({ props }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra los locators en base al nombre o apellido que coincida con la búsqueda
  const filteredProperties = props.filter(prop =>
    `${prop.name} ${prop.street}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="locator-search">
      <div>
        <input
          type="text"
          placeholder="Buscar por nombre o calle..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="table-card-container">
        {filteredProperties.map(prop => (
          <PropertyCard key={prop.id} prop={prop} />
        ))}
        {filteredProperties.length === 0 && (
          <p className="no-results">No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};

export default PropertySearch;

PropertySearch.propTypes = {
  props: PropTypes.array
};
