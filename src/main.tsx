import React from 'react'
import ReactDOM from 'react-dom/client'
import TopBar from './topBar.tsx'
import VirtualHealthcare from './virtualHealthcare.tsx'
import OurServices from './ourServices.tsx'
import OurMobile from './ourMobile.tsx'
import Review from './review.tsx'
import Check from './check.tsx'
import Footer from './footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TopBar />
    <VirtualHealthcare />
    <OurServices />
    <OurMobile />
    <Review />
    <Check />
    <Footer />
  </React.StrictMode>,
)
