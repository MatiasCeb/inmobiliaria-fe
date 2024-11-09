import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddLocatorForm = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [propertiesList, setPropertiesList] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newLocator = {
      name,
      lastname,
      propertiesList,
    };

    try {
      const response = await fetch('http://localhost:8080/locators/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLocator),
      });

      if (response.ok) {
        // Redirige a /locators después de una respuesta exitosa
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
      <h2>Agregar Nuevo Locator</h2>
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
      {/* Agregar aquí inputs para las propiedades si necesitas más detalles para propertiesList */}
      <button type="submit">Guardar</button>
    </form>
  );
};

export default AddLocatorForm;
