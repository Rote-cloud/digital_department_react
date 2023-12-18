import './Footer.modules.css';

export default function Footer() {
  return (
    <div className='footer'>
        <img className='footerElement2' src="./src/assets/element1.svg" />
        
        <div className='footerBg'>
            <div className='healthCare'>
                <div className='footerLogo'>
                    <div className='healthCareLogo'>T</div>
                    <div className='healthCareTitle'>HealthCare</div>
                </div>
                <div className='healthCareInfo'>HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</div>
                <div className='healthCareInfo2'>©HealthCare PTY LTD 2023. All rights reserved</div>
            </div>

            <div className='footerInfo'>
                <div className='footerText'>
                    <div className='footerInfoTitle'>Company</div>
                    <div className='footerInfoText'>About<br/>Testimonials<br/>Find a doctor<br/>Apps</div>
                </div>

                <div className='footerText'>
                    <div className='footerInfoTitle'>Region</div>
                    <div className='footerInfoText'>Indonesia<br/>Singapore<br/>Hongkong<br/>Canada</div>
                </div>

                <div className='footerText'>
                    <div className='footerInfoTitle'>Help</div>
                    <div className='footerInfoText'>Help center<br/>Contact support<br/>Instructions<br/>How it works</div>
                </div>
            </div>

            <img className='footerElement1' src="./src/assets/element1.svg" />
        </div>
    </div>
  );
}