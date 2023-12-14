import './ourMobile.css';

export default function OurMobile() {
  return (
    <div className='learnMore'>
        <div className='ourMobile'>
            <img className='mobileImage' src="./src/assets/illustration2.svg" />
            <div className='boxMobile'>
                <div className='mobileTitle'>Leading healthcare providers</div>
                <div className='mobileUnderlining'></div>
                <div className='mobileText'>
                    We provides progressive, and affordable healthcare,
                    accessible on mobile and online for everyone. 
                    To us, it’s not just work. We take pride in the solutions we deliver
                </div>
                <button className='buttonMobile'>Learn more</button>
            </div>
        </div>

        <div className='ourMobile'>
            <div className='boxMobile'>
                <div className='mobileTitle2'>Download our mobile apps</div>
                <div className='mobileUnderlining'></div>
                <div className='mobileText2'>
                Our dedicated patient engagement app and 
                web portal allow you to access information instantaneously (no tedeous form, long calls, 
                or administrative hassle) and securely
                </div>
                <button className='buttonMobile2'>Download   <img className='arrowDown' src="./src/assets/arrowDown.svg"/></button>
            </div>
            <img className='mobileImage' src="./src/assets/illustration3.svg" />
        </div>

        <img className='element2' src="./src/assets/element.svg"/>
    </div>
    
  );
}