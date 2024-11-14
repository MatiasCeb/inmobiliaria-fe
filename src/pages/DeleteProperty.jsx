import { useNavigate, useParams } from 'react-router-dom';

const DeleteProperty = () => {
  const { propertyId } = useParams(); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/properties/delete/${propertyId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (response.ok) {
        navigate('/properties');
      } else {
        console.error('Error en el servidor al eliminar la propiedad');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>¿Seguro que quieres eliminar esta propiedad?</h2>
      <button type="submit">Eliminar Propiedad</button>
    </form>
  );
};

export default DeleteProperty;
