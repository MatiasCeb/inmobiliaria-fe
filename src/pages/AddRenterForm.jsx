import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./AddRenterForm.css";

const AddRenterForm = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cuil, setCuil] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [employer, setEmployer] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRenter = {
      name,
      lastname,
      dni,
      email,
      phone,
      cuil,
      monthlyIncome,
      employer
    };

    try {
      const response = await fetch('http://localhost:8080/renters', {
        method: 'POST',
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
    <form className="form-locator" onSubmit={handleSubmit}>
      <h2 className="form-title">Agregar Nuevo Locatario</h2>

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

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Teléfono:</label>
        <input
          id="phone"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="cuil">Cuil:</label>
        <input
          id="cuil"
          type="number"
          value={cuil}
          onChange={(e) => setCuil(e.target.value)}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="monthlyIncome">Monto de sueldo:</label>
        <input
          id="monthlyIncome"
          type="number"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(e.target.value)}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="employer">Empleador:</label>
        <input
          id="employer"
          type="text"
          value={employer}
          onChange={(e) => setEmployer(e.target.value)}
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

export default AddRenterForm;
