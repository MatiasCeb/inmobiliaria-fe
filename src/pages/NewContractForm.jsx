import axios from "axios"
import { useState, useEffect } from 'react';

import "./NewContractForm.css";

const NewContractForm = () => {
  const API_URL = import.meta.env.VITE_API_URL

  const [landlords, setLandlords] = useState([]);
  const [locatarios, setLocatarios] = useState([]);
  const [inmuebles, setInmuebles] = useState([]);
  const [selectedLandlord, setSelectedLandlord] = useState({});
  const [selectedLocatario, setSelectedLocatario] = useState({});
  const [selectedInmueble, setSelectedInmueble] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseLandlords = await axios.get(`${API_URL}landlords`);
        setLandlords(responseLandlords.data);
        console.log("Landlords: ", responseLandlords.data)
        const responseRenters = await axios.get(`${API_URL}renters`);
        setLocatarios(responseRenters.data);
        console.log("Locatarios: ", responseRenters.data)
        //console.log(API_URL)
      } catch (error) {
        console.error("Error fetching locators: ", error )
      }
    };
    // console.log(locators)
    fetchData();
  }, [])

  useEffect(() => {
    // Fetch inmuebles when locador changes
    if (selectedLandlord) {
        const fetchData = async () => {
            try {
              const responseProperties = await axios.get(`${API_URL}properties/landlord/${selectedLandlord}`);
              setInmuebles(responseProperties.data);
              console.log("responseProperties: ", responseProperties.data)
            } catch (error) {
              console.error("Error fetching properties: ", error )
            }
          };
          // console.log(locators)
          fetchData();
    } else {
      setInmuebles([]);
    }
    console.log(landlords);
    console.log(locatarios);
  }, [selectedLandlord]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("selectedInmueble: ", selectedInmueble);
    const data = {
        landlordId: selectedLandlord,
        renterId: selectedLocatario,
        propertyId: selectedInmueble
    };
    console.log("data: ", data);
    fetch('http://localhost:8080/contracts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(response => {
      if (response.ok) alert('Contrato creado exitosamente!');
    });
  };

  return (
    <form className="form-contrato" onSubmit={handleSubmit}>
      <h2 className="form-title">Nuevo Contrato</h2>

      <div className="form-group">
        <label htmlFor="landlord">Locador:</label>
        <select
          id="landlord"
          value={selectedLandlord}
          onChange={(e) => setSelectedLandlord(e.target.value)}
          className="form-select"
        >
          <option value="">Seleccione un locador</option>
          {landlords.map((landlord) => (
            <option key={landlord.id} value={landlord.id}>
              {landlord.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="locatario">Locatario:</label>
        <select
          id="locatario"
          value={selectedLocatario}
          onChange={(e) => setSelectedLocatario(e.target.value)}
          className="form-select"
        >
          <option value="">Seleccione un locatario</option>
          {locatarios.map((locatario) => (
            <option key={locatario.id} value={locatario.id}>
              {locatario.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="inmueble">Inmueble:</label>
        <select
          id="inmueble"
          value={selectedInmueble}
          onChange={(e) => setSelectedInmueble(e.target.value)}
          className="form-select"
          disabled={!selectedLandlord}
        >
          <option value="">Seleccione un inmueble</option>
          {inmuebles.map((inmueble) => (
            <option key={inmueble.id} value={inmueble.id}>
              {inmueble.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="form-button">
        Crear Contrato
      </button>
    </form>
  );
};

export default NewContractForm;
