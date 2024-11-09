import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./LocatorsCard.css"

const LocatorsCard = ( locator ) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{locator.name} {locator.lastname}</h2>
      </div>
      <div className="card-body">
        {locator.propertiesList && locator.propertiesList.length > 0 && (
            <>
                <h3>Properties:</h3>
                <ul className="property-list">
                    {locator.propertiesList.map(property => (
                        <li key={property.id} className="property-item">
                        <h4>{property.name}</h4>
                        <p>{property.street}, {property.streetNumber}</p>
                        </li>
                    ))}
                </ul>
            </>
        )}
        <Link to={`/locators/${locator.id}`} className="view-more-btn">Ver más</Link>
      </div>
    </div>
  );
};

export default LocatorsCard;

LocatorsCard.propTypes = {
    locator: PropTypes.object
  };