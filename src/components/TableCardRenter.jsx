import PropTypes from 'prop-types';
import './TableCard.css';
import { Link } from 'react-router-dom';

const TableCardRenter = ( {renter} ) => {
  console.log(renter)
  return (
    <div className="table-card">
      <div className="table-card-header">
        <h2>{renter.name} {renter.lastname}</h2>
      </div>
      <div className="table-card-body">
        <Link to={`/edit-renter/${renter.id}`} className="view-more-btn">Editar Locatario</Link>
        <Link to={`/renters/delete/${renter.id}`} className="view-more-btn">Eliminar Locatario</Link>
        <Link to={`/renters/${renter.id}`} className="view-more-btn">Ver más</Link>
      </div>
    </div>
  );
};

export default TableCardRenter;

TableCardRenter.propTypes = {
    renter: PropTypes.object
  };