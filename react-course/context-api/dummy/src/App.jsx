 
import { useContext } from 'react'
import './App.css'
import Counter from './components/Counter'
import { counterContext } from './Context/Counter'

function App() {
  const counterState = useContext(counterContext)
  const { count } = counterState
  return (
    <>
    <h1>Counter is: {count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  )
}

export default App
