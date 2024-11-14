import { useNavigate, useParams } from 'react-router-dom';

const DeleteLocator = () => {
  const { locatorId } = useParams(); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/locators/delete/${locatorId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (response.ok) {
        navigate('/locators');
      } else {
        console.error('Error en el servidor al eliminar al locador');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>¿Seguro que quieres eliminar al locador y sus propiedades?</h2>
      <button type="submit">Eliminar Locador</button>
    </form>
  );
};

export default DeleteLocator;
