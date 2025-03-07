import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [useNumber, setUseNumber] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)
  const generatePassword = useCallback(() => {
    setPassword('Raj')
  }, [length, useNumber, charAllowed])
  useEffect(() => {
    generatePassword()
  }, [length, useNumber, charAllowed])
  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }
  return (
    <>
      <div className='w-full max-w-wd mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-white' placeholder='password' ref={passwordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer' onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)} />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={useNumber} onChange={() => setUseNumber((prev) => !prev)}/>
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)}/>
            <label htmlFor="characters">characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
