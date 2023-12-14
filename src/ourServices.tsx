import './ourServices.css';

export default function OurServices() {
  return (
    <div className='ourServicesHeader'>
        <img className='element' src="./src/assets/element1.svg"/>
        <img className='bgElement' src="./src/assets/bgElement.svg"/>

        <div className='ourServices'>Our services</div>
        <div className='ourServicesUnderlining'></div>
        <div className='ourServicesText'>
        We provide to you 
        the best choiches for you. Adjust it to your health needs and make sure 
        your undergo treatment with our highly qualified doctors you can consult with us 
        which type of service is suitable for your health
        </div>

        <div className='services'>
          <div className='box'>
            <img className='boxImage' src="./src/assets/search.svg" />
            <div className='boxName'>Search doctor</div>
            <div className='boxInfo'>
              Choose your doctor from thousands
               of specialist, general, and 
               trusted hospitals
            </div>
          </div>
          <div className='box'>
            <img className='boxImage' src="./src/assets/pills.svg" />
            <div className='boxName'>Online pharmacy</div>
            <div className='boxInfo'>
              Buy  your medicines with our 
              mobile application with a 
              simple delivery system
            </div>
          </div>
          <div className='box'>
            <img className='boxImage' src="./src/assets/consultation.svg" />
            <div className='boxName'>Consultation</div>
            <div className='boxInfo'>
              Free consultation with 
              our trusted doctors and 
              get the best recomendations
            </div>
          </div>
          <div className='box'>
            <img className='boxImage' src="./src/assets/info.svg" />
            <div className='boxName'>Details info</div>
            <div className='boxInfo'>
              Free consultation with 
              our trusted doctors and 
              get the best recomendations
            </div>
          </div>
          <div className='box'>
            <img className='boxImage' src="./src/assets/care.svg" />
            <div className='boxName'>Emergency care</div>
            <div className='boxInfo'>
              You can get 24/7 urgent 
              care for yourself or your 
              children and your lovely family
            </div>
          </div>
          <div className='box'>
            <img className='boxImage' src="./src/assets/tracking.svg" />
            <div className='boxName'>Tracking</div>
            <div className='boxInfo'>
              Track and save your 
              medical history and 
              health data 
            </div>
          </div>
        </div>

        <button className='buttonOurSer'>Learn more</button>
    </div>
    
  );
}