import React from 'react'
import ReactDOM from 'react-dom/client'
import TopBar from './topBar.tsx'
import VirtualHealthcare from './virtualHealthcare.tsx'
import OurServices from './ourServices.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TopBar />
    <VirtualHealthcare />
    <OurServices />
  </React.StrictMode>,
)
