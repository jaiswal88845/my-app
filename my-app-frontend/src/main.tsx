import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import Doctors from './components/DoctorComponent.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Doctors />
  </React.StrictMode>,
)
