import axios from "axios"
import { useEffect, useState } from "react"


import PropertySearch from '../components/PropertySearch';
// import AddLocatorButton from "../components/AddLocatorButton";

function PropertiesPage() {

  const API_URL = import.meta.env.VITE_API_URL

  const [properties, setProperties] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}properties`);
        setProperties(response.data);
        //console.log(API_URL)
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching properties: ", error )
      }
    };
    console.log(properties)
    fetchData();
  }, [])

  // TODO: Loader
  if (!properties) {return (
    <h1>Cargando....</h1>
  )}

  return (
    <>
      <div>
        {/* <AddLocatorButton/> */}
        <PropertySearch props={properties} />
        {/* {locators.map((locator) => (
          <TableCard locator={locator} key={locator.id}/>
        ))} */}
      </div>
    </>
  )
}

export default PropertiesPage
