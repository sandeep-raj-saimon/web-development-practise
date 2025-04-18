import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
function Login() {
  const [userName, setUserName] = useState(null)
  const [password, setPassword] = useState(null)
  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ userName, password })
    console.log('Submit button has been clicked')
  }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username' value={userName} onChange={(e) => setUserName(e.target.value)}/>
        {"     "}
        <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login