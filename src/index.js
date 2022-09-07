import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Chart from "./Chart"
import collatzConjecture from "./algorithm"

const App = () => {
  const [input, setInput] = useState(3)
  const collection = collatzConjecture(input)

  const onInputChange = (event) => {
    setInput(parseInt(event.target.value))
  }

  return (
    <>
      <Chart collection={collection} />
      <input type="number" defaultValue={input} onChange={onInputChange} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

