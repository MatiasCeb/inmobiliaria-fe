import axios from "axios"
import { useEffect, useState } from "react"


import LocatorSearch from '../components/LocatorSearch';
import AddLocatorButton from "../components/AddLocatorButton";

function LocatorsPage() {

  const API_URL = import.meta.env.VITE_API_URL

  const [locators, setLocators] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}locators`);
        setLocators(response.data);
        //console.log(API_URL)
        // console.log(response.data)
      } catch (error) {
        console.error("Error fetching locators: ", error )
      }
    };
    console.log(locators)
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
      <AddLocatorButton/>
      <LocatorSearch locators={locators} />
      {/* {locators.map((locator) => (
        <TableCard locator={locator} key={locator.id}/>
      ))} */}
    </>
  )
}

export default LocatorsPage
