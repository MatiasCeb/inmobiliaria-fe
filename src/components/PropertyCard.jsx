import PropTypes from 'prop-types';
import './TableCard.css';
import { Link } from 'react-router-dom';

const PropertyCard = ( {prop} ) => {
  return (
    <div className="table-card">
      <div className="table-card-header">
        <h2>{prop.name} {prop.street}</h2>
      </div>
      <div className="table-card-body">
      <Link to={`/properties/delete/${prop.id}`} className="view-more-btn">Eliminar Propiedad</Link>
      </div>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
    prop: PropTypes.object
  };