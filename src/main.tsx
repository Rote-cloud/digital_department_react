import React from 'react'
import ReactDOM from 'react-dom/client'
import TopBar from './topBar.tsx'
import VirtualHealthcare from './virtualHealthcare.tsx'
import OurServices from './ourServices.tsx'
import OurMobile from './ourMobile.tsx'
import Review from './review.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TopBar />
    <VirtualHealthcare />
    <OurServices />
    <OurMobile />
    <Review />
  </React.StrictMode>,
)
