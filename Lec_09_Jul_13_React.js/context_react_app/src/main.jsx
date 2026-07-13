import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MyContextProvider from './Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </StrictMode>,
)
