import PropTypes from 'prop-types';
import './TableCard.css';
import { Link } from 'react-router-dom';
import AddPropertyButton from './AddPropertyButton';

const TableCard = ( {locator} ) => {
  return (
    <div className="table-card">
      <div className="table-card-header">
        <h2>{locator.name} {locator.lastname}</h2>
      </div>
      <div className="table-card-body">
        {locator.propertiesList && locator.propertiesList.length > 0 && (
          <>
            <h3>Properties:</h3>
            <table className="property-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Street</th>
                  <th>Street Number</th>
                </tr>
              </thead>
              <tbody>
                {locator.propertiesList.map(property => (
                  <tr key={property.id}>
                    <td>{property.name}</td>
                    <td>{property.street}</td>
                    <td>{property.streetNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {/* <AddPropertyButton id={locator.id} /> */}
        <Link to={`/add-properties/${locator.id}`} className="view-more-btn">Agregar propiedad</Link>
        <Link to={`/edit-locator/${locator.id}`} className="view-more-btn">Editar Locador</Link>
        <Link to={`/locators/delete/${locator.id}`} className="view-more-btn">Eliminar Locador</Link>
        <Link to={`/locators/${locator.id}`} className="view-more-btn">Ver más</Link>
      </div>
    </div>
  );
};

export default TableCard;

TableCard.propTypes = {
    locator: PropTypes.object
  };