import TopBar from './TopBar.tsx'
import VirtualHealthcare from './VirtualHealthcare.tsx'
import OurServices from './OurServices.tsx'
import OurMobile from './OurMobile.tsx'
import Review from './Review.tsx'
import Check from './Check.tsx'
import Footer from './Footer.tsx'

export default function App() {
    return (
      <div>
        <TopBar />
        <VirtualHealthcare />
        <OurServices />
        <OurMobile />
        <Review />
        <Check />
        <Footer />
      </div>
    );
  }