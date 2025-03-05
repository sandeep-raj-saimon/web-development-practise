import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img class="w-[400px]" alt="" src="https://i.imgur.com/BuXiOBm.jpg" />
        </div>
        <div class="flex items-center md:items-start">
        </div>
      </div>
      <Card username="Sandeep Raj Saimon"/>
    </>
  )
}

export default App
