import React, { useContext } from 'react'
import { counterContext } from '../Context/Counter'
const Counter = () => {
    const countContext = useContext(counterContext)
    const { count, setCount } = countContext
  return (
    <div>
        <button 
          onClick={() => setCount(count+1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Increment
        </button>
        {' '}
        <button onClick={() => setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter