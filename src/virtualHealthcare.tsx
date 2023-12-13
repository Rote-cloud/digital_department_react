import './virtualHealthcare.css';

export default function VirtualHealthcare() {
  return (
    <div className='header'>
        <img className='element1' src="./src/assets/element.svg"/>
        
        <div className='headerText'>
            <div className='virtualHealthcare'>Virtual healthcare <br/>for you</div>
            <div className='ourService'>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</div>
            <button className='button'>Consult today</button>
        </div>

        <img className='image' src="./src/assets/illustration.svg" />
    </div>
  );
}