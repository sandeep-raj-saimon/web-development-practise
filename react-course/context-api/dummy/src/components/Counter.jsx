import React, { useContext } from 'react'
import { counterContext } from '../Context/Counter'
const Counter = () => {
    const countContext = useContext(counterContext)
    const { count, setCount } = countContext
  return (
    <div>
        <button onClick={() => setCount(count+1)}>Increment</button>
        {' '}
        <button onClick={() => setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter