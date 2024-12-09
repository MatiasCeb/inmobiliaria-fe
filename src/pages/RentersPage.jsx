import axios from "axios"
import { useEffect, useState } from "react"


import RenterSearch from '../components/RenterSearch';
// import AddLocatorButton from "../components/AddLocatorButton";

function RentersPage() {

  const API_URL = import.meta.env.VITE_API_URL

  const [renters, setRenters] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}renters`);
        setRenters(response.data);
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
  if (!renters) {return (
    <h1>Cargando....</h1>
  )}

  return (
    <>
      <div>
        {/* <AddLocatorButton/> */}
        <RenterSearch renters={renters} />
        {/* {locators.map((locator) => (
          <TableCard locator={locator} key={locator.id}/>
        ))} */}
      </div>
    </>
  )
}

export default RentersPage
