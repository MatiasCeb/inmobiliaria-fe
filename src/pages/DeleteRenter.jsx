import { useNavigate, useParams } from 'react-router-dom';

import "./DeleteRenter.css";

const DeleteRenter = () => {
  const { renterId } = useParams(); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/renters/${renterId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (response.ok) {
        navigate('/renters');
      } else {
        console.error('Error en el servidor al eliminar al locatario');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <form className="form-delete-locator" onSubmit={handleSubmit}>
      <h2 className="form-delete-title">¿Seguro que quieres eliminar al locatario?</h2>
      <button type="submit" className="delete-button">
        Eliminar Locatario
      </button>
    </form>
  );
};

export default DeleteRenter;
