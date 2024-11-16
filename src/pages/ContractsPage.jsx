import axios from "axios"
import { useEffect, useState } from "react"


import ContractsSearch from '../components/ContractSearch';
// import AddLocatorButton from "../components/AddLocatorButton";

function ContractsPage() {

  const API_URL = import.meta.env.VITE_API_URL

  const [contracts, setContracts] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}contracts`);
        setContracts(response.data);
        //console.log(API_URL)
        // console.log(response.data)
      } catch (error) {
        console.error("Error fetching contracts: ", error )
      }
    };
    // console.log(locators)
    fetchData();
  }, [])

  // TODO: Loader
  if (!contracts) {return (
    <h1>Cargando....</h1>
  )}

  return (
    <>
      <div>
        {/* <AddLocatorButton/> */}
        <ContractsSearch contracts={contracts} />
        {/* {locators.map((locator) => (
          <TableCard locator={locator} key={locator.id}/>
        ))} */}
      </div>
    </>
  )
}

export default ContractsPage
