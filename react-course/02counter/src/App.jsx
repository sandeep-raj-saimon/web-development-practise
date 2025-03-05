import './App.css'
import { useState } from 'react';
function App() {
  // let counter = 0
  // const addValue =  () => {
  //   counter = counter + 1
  //   console.log(counter)
  // }
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter+1)
  }
  const substractValue = () => {
    if (counter - 1 < 0) {
      return
    }
    setCounter(counter-1)
  }
  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={() => addValue()}>add</button> {" "}
      <button onClick={() => substractValue()}>substract</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
