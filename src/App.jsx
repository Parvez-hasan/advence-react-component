import { Suspense } from "react"
import { Navber } from "./components/navber/Navber"
import { Navber2 } from "./components/navber/Navber2"
import { PricingData } from "./components/pricingdata/PricingData"
import ResultsChart from "./components/resultsChart/ResultsChart"
import { LeptopData } from "./components/resultsChart/LeptopData"
import MarksData from "./components/marksData/MarksData"
import axios from "axios"



const pricingPromise = fetch('pricingData.json') .then(res => res.json());

const marksPromise = axios.get('marksData.json');

function App() {


  return (
    <>
      <header>
        <Navber2></Navber2>
      </header>

      <main>
        <Suspense fallback={<h4 className="text-center text-2xl mt-4">Please Wait For Your Inpometion...</h4>}>
          <PricingData pricingPromise={pricingPromise}></PricingData>
        </Suspense>

        <ResultsChart></ResultsChart>
        <LeptopData marksPromise={marksPromise}></LeptopData>


        <Suspense fallback={<h4 className="text-center text-2xl mt-4">Please Wait For Your Inpometion...</h4>}>
          <MarksData marksPromise={marksPromise}></MarksData>
        </Suspense>

      </main>

      {/* <Navber></Navber> */}

    
    </>
  )
}

export default App
