import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import "./EditRenterForm.css";

const EditRenterForm = () => {
  const { renterId } = useParams();
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [dni, setDni] = useState(0);
  // const [propertiesList] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRenter = {
      id: renterId,
      name,
      lastname,
      dni,
    };

    try {
      const response = await fetch(`http://localhost:8080/renters/${renterId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRenter),
      });

      if (response.ok) {
        navigate('/renters');
      } else {
        console.error('Error en el servidor al crear el locatario');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <form className="form-edit-locator" onSubmit={handleSubmit}>
      <h2 className="form-title">Editar Locatario</h2>

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

      <div className="form-group">
        <label htmlFor="dni">Dni:</label>
        <input
          id="dni"
          type="number"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
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

export default EditRenterForm;
