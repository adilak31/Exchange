import axios from 'axios'
import { useEffect, useState } from 'react'


function App() {
  const [eur, setEur] = useState("")
  const COEF = 1.1
  const [result, setResult] = useState("")

  const handlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEur(event.target.value)

  }
  const count = () => {
    setResult((Number(eur) * Number(COEF)).toFixed(2))
  }

  return (
    <div className="App">
      <input value={eur} onChange={handlChange} placeholder="eur" type="number" />
      <button onClick={count}> enter</button>
      <div>{result}</div>


    </div>
  )
}

export default App
