import axios from "axios"
import { useEffect, useState } from "react"


import LandlordSearch from '../components/LandlordSearch';
// import AddLocatorButton from "../components/AddLocatorButton";

function LandlordsPage() {

  const API_URL = import.meta.env.VITE_API_URL

  const [landlords, setLandlords] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}landlords`);
        setLandlords(response.data);
        //console.log(API_URL)
        // console.log(response.data)
      } catch (error) {
        console.error("Error fetching landlords: ", error )
      }
    };
    // console.log(locators)
    fetchData();
  }, [])

  // TODO: Loader
  if (!landlords) {return (
    <h1>Cargando....</h1>
  )}

  return (
    <>
      <div>
        {/* <AddLocatorButton/> */}
        <LandlordSearch landlords={landlords} />
        {/* {locators.map((locator) => (
          <TableCard locator={locator} key={locator.id}/>
        ))} */}
      </div>
    </>
  )
}

export default LandlordsPage
