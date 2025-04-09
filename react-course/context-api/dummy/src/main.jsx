import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterContextProvider } from './Context/Counter.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterContextProvider>
      <App /> {/* now the app will have access of this provider as well all the components inside the App component */}
    </CounterContextProvider>
  </StrictMode>,
)
