import PropTypes from 'prop-types';
import './TableCard.css';
import { Link } from 'react-router-dom';

const TableCard = ( {landlord} ) => {
  return (
    <div className="table-card">
      <div className="table-card-header">
        <h2>{landlord.name} {landlord.lastname}</h2>
      </div>
      <div className="table-card-body">
        {landlord.propertiesList && landlord.propertiesList.length > 0 && (
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
                {landlord.propertiesList.map(property => (
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
        <Link to={`/add-properties/${landlord.id}`} className="view-more-btn">Agregar propiedad</Link>
        <Link to={`/edit-landlord/${landlord.id}`} className="view-more-btn">Editar Locador</Link>
        <Link to={`/landlords/delete/${landlord.id}`} className="view-more-btn">Eliminar Locador</Link>
        <Link to={`/landlords/${landlord.id}`} className="view-more-btn">Ver más</Link>
      </div>
    </div>
  );
};

export default TableCard;

TableCard.propTypes = {
    landlord: PropTypes.object
  };