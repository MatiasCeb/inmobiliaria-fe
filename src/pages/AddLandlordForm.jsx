import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./AddLandlordForm.css";

const AddLandlordForm = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [propertiesList] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newLandlord = {
      name,
      lastname,
      propertiesList,
    };

    try {
      const response = await fetch('http://localhost:8080/landlords/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLandlord),
      });

      if (response.ok) {
        navigate('/landlords');
      } else {
        console.error('Error en el servidor al crear el landlord');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };


  return (
    <form className="form-locator" onSubmit={handleSubmit}>
      <h2 className="form-title">Agregar Nuevo Locator</h2>

      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastname">Apellido:</label>
        <input
          id="lastname"
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="form-input"
          required
        />
      </div>

      <button type="submit" className="form-button">
        Guardar
      </button>
    </form>
  );
};

export default AddLandlordForm;
