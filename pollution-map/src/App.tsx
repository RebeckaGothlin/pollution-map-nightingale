import './App.css'
import { IOpenAQResponse } from './models/IOpenAQResponse';
import { getPollutionData } from './services/pollutionDataService'

function App() {

  const handleClick = async () => {
    
    try {
      const data: IOpenAQResponse = await getPollutionData();
      console.log("Vår data", data)
    } catch (error) {
      console.error("Kunde inte hämta data", error);
      
    }
    
  }

  return (
    <>
    <button onClick={handleClick}>Hämta data</button>
Välkommen!
    </>
  )
}

export default App
