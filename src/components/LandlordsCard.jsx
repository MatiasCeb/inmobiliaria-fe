import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./LandlordsCard.css"

const LandlordCard = ( landlord ) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{landlord.name} {landlord.lastname}</h2>
      </div>
      <div className="card-body">
        {landlord.propertiesList && landlord.propertiesList.length > 0 && (
            <>
                <h3>Properties:</h3>
                <ul className="property-list">
                    {landlord.propertiesList.map(property => (
                        <li key={property.id} className="property-item">
                        <h4>{property.name}</h4>
                        <p>{property.street}, {property.streetNumber}</p>
                        </li>
                    ))}
                </ul>
            </>
        )}
        <Link to={`/landlords/${landlord.id}`} className="view-more-btn">Ver más</Link>
      </div>
    </div>
  );
};

export default LandlordCard;

LandlordCard.propTypes = {
    landlord: PropTypes.object
  };