import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [locators, setLocators] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/locators");
        setLocators(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching locators: ", error )
      }
    };

    fetchData();
  }, [])

  // TODO: Loader
  if (!locators) {return (
    <h1>Cargando....</h1>
  )}

  return (
    <>
      <h1>
        Click on the Vite and React logos to learn more
      </h1>
      <ol>
      {locators.map(({id, name}) => (
        <li key={id}>ID: {id}, Nombre: {name}</li>
      ))}
      </ol>
      {locators.map((locator) => (
        <div key={locator.id}>
          {locator.name}
        </div>
      ))}
    </>
  )
}

export default App
