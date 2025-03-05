import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('green');
  const changeColor = (newColor) => {
    console.log(`changing the BG color to ${newColor}`)
    setColor(newColor)
  }
  return (
    <div className='w-full h-screen' style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-amber-800">
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='text-blue-400' onClick={() => changeColor('blue')}>Click me to change BG to Blue</button>
          <button className='text-green-400' onClick={() => changeColor('green')}>Click me to change BG to Green</button>
          <button className='text-purple-500' onClick={() => changeColor('purple')}>Click me to change BG to Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
