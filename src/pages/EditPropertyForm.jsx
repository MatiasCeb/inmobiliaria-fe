import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPropertyForm = () => {
  const API_URL = import.meta.env.VITE_API_URL

  const { propertyId } = useParams();
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState(0);
  const [landlordId, setLandlordId] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}property/${propertyId}`);
        setLandlordId(response.data.landlord);
      } catch (error) {
        console.error("Error fetching properties: ", error )
      }
    };
    console.log(landlordId)
    fetchData();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editedProperty = {
      id: propertyId,
      name,
      street,
      streetNumber,
      landlord: {
        id: landlordId
      }
    };

    console.log("editedProperty: ", editedProperty)

    try {
      const response = await fetch('http://localhost:8080/properties/edit', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedProperty),
      });

      if (response.ok) {
        navigate('/properties');
      } else {
        console.error('Error en el servidor al actualizar la propiedad');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Propiedad</h2>
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
        <label>
          Número de calle:
            <input 
              type="number" 
              value={streetNumber} 
              onChange={(e) => setStreetNumber(e.target.value)} 
              required 
            />
          </label>
        </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default EditPropertyForm;
