import { Suspense } from "react"
import Button from "./components/Button"
import { Navber } from "./components/navber/Navber"
import { Navber2 } from "./components/navber/Navber2"
import { PricingData } from "./components/pricingdata/PricingData"
import ResultsChart from "./components/resultsChart/ResultsChart"
import { LeptopData } from "./components/resultsChart/LeptopData"


const pricingPromise = fetch('pricingData.json') .then(res => res.json());

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
        <LeptopData></LeptopData>

      </main>

      {/* <Navber></Navber> */}

      {/* <Button/> */}
    </>
  )
}

export default App
