import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditLocatorForm = () => {
  const { locatorId } = useParams();
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  // const [propertiesList] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newLocator = {
      id: locatorId,
      name,
      lastname,
      // propertiesList,
    };

    try {
      const response = await fetch('http://localhost:8080/locators/edit', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLocator),
      });

      if (response.ok) {
        navigate('/locators');
      } else {
        console.error('Error en el servidor al crear el locator');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Locador</h2>
      <label>
        Nombre:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </label>
      <label>
        Apellido:
        <input 
          type="text" 
          value={lastname} 
          onChange={(e) => setLastname(e.target.value)} 
          required 
        />
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default EditLocatorForm;
