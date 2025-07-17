import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import  Chandrayan from "./Chandrayan.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Chandrayan />
  </StrictMode>,
)
