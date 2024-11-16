import axios from "axios"
import { useState, useEffect } from 'react';

const NewContractForm = () => {
  const API_URL = import.meta.env.VITE_API_URL

  const [locadores, setLocadores] = useState([]);
  const [locatarios, setLocatarios] = useState([]);
  const [inmuebles, setInmuebles] = useState([]);
  const [selectedLocador, setSelectedLocador] = useState({});
  const [selectedLocatario, setSelectedLocatario] = useState({});
  const [selectedInmueble, setSelectedInmueble] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseLocators = await axios.get(`${API_URL}locators`);
        setLocadores(responseLocators.data);
        console.log("Locadores: ", responseLocators.data)
        const responseRenters = await axios.get(`${API_URL}renters`);
        setLocatarios(responseRenters.data);
        console.log("Locatarios: ", responseLocators.data)
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
    if (selectedLocador) {
        const fetchData = async () => {
            try {
              const responseProperties = await axios.get(`${API_URL}properties/locator/${selectedLocador}`);
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
    console.log(locadores);
    console.log(locatarios);
  }, [selectedLocador]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("selectedInmueble: ", selectedInmueble);
    const data = {
        locatorId: selectedLocador,
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
    <form onSubmit={handleSubmit}>
      <h2>Nuevo Contrato</h2>
      <div>
        <label>Locador:</label>
        <select
          value={selectedLocador}
          onChange={(e) => setSelectedLocador(e.target.value)}
        >
          <option value="">Seleccione un locador</option>
          {locadores.map((locador) => (
            <option key={locador.id} value={locador.id}>
              {locador.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Locatario:</label>
        <select
          value={selectedLocatario}
          onChange={(e) => setSelectedLocatario(e.target.value)}
        >
          <option value="">Seleccione un locatario</option>
          {locatarios.map((locatario) => (
            <option key={locatario.id} value={locatario.id}>
              {locatario.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Inmueble:</label>
        <select
          value={selectedInmueble}
          onChange={(e) => setSelectedInmueble(e.target.value)}
          disabled={!selectedLocador}
        >
          <option value="">Seleccione un inmueble</option>
          {inmuebles.map((inmueble) => (
            <option key={inmueble.id} value={inmueble.id}>
              {inmueble.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Crear Contrato</button>
    </form>
  );
};

export default NewContractForm;
