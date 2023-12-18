import Button from './Button';
import MyText from './MyText';
import './OurMobile.modules.css';
import Title from './Title';

export default function OurMobile() {
  return (
    <div className='learnMore'>
        <div className='ourMobile'>
            <img className='mobileImage' src="./src/assets/illustration2.svg" />
            <div className='boxMobile'>
                <div style={{ width: "70%"}}>
                    <Title title="Leading healthcare providers" />
                </div>
                <div className='mobileUnderlining'></div>
                <div style={{ width: "90%"}}>
                    <MyText text="We provides progressive, and affordable healthcare,
                    accessible on mobile and online for everyone. 
                    To us, it’s not just work. We take pride in the solutions we deliver" />
                </div>

                <div style={{ marginTop: "70px"}}>
                    <Button buttonText='Learn more' />
                </div>
            </div>
        </div>

        <div className='ourMobile'>
            <div className='boxMobile'>
                <div style={{ width: "70%"}}>
                    <Title title="Download our mobile apps" />
                </div>
                <div className='mobileUnderlining'></div>
                <div style={{ width: "70%"}}>
                    <MyText 
                    text="Our dedicated patient engagement app and 
                        web portal allow you to access information instantaneously (no tedeous form, long calls, 
                        or administrative hassle) and securely" />
                </div>
                

                <div style={{ marginTop: "40px"}}>
                    <Button buttonText='Download' buttonIcon={<img src="./src/assets/arrowDown.svg"/>} />
                </div>
            </div>
            <img className='mobileImage' src="./src/assets/illustration3.svg" />
        </div>

        <img className='element2' src="./src/assets/element.svg"/>
    </div>
    
  );
}