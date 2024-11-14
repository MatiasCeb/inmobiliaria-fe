import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddPropertyForm = () => {
  const { locatorId } = useParams(); // Obtener el id del locator desde la URL
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: El locator id enviado deberia hacer que se sume la propiedad al objeto locator en BE
    const newProperty = {
      name,
      street,
      streetNumber,
      locator: {
        id: locatorId
      }
    };

    try {
      const response = await fetch('http://localhost:8080/properties/edit', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProperty),
      });
      console.log(JSON.stringify(newProperty))
      
      if (response.ok) {
        // Redirige a /locators después de una respuesta exitosa
        navigate('/locators');
      } else {
        console.error('Error en el servidor al agregar la propiedad', response);
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Nueva Propiedad</h2>
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
        Calle:
        <input 
          type="text" 
          value={street} 
          onChange={(e) => setStreet(e.target.value)} 
          required 
        />
      </label>
      <label>
        Número de Calle:
        <input 
          type="number" 
          value={streetNumber} 
          onChange={(e) => setStreetNumber(e.target.value)} 
          required 
        />
      </label>
      <button type="submit">Guardar Propiedad</button>
    </form>
  );
};

export default AddPropertyForm;
