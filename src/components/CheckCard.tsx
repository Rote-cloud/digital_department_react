import './CheckCard.modules.css';

export default function CheckCard() {
  return (
    <div className='cards'>
        <div className='checkCard'>
            <img className='checkImage' src="./src/assets/check1.svg"/>
            <div className='checkCardTitle'>Disease detection, check <br/>up in the laboratory</div>
            <div className='checkCardText'>In this case, the role of the health laboratory is very important to do<br/>a disease detection...</div>
            <div className='checkCardMore'>Read more <img className='arrowCard' src="./src/assets/arrowCard.svg"/></div>
        </div>
        <div className='checkCard'>
            <img className='checkImage' src="./src/assets/check2.svg"/>
            <div className='checkCardTitle'>Herbal medicines that are <br/>safe for consumption</div>
            <div className='checkCardText'>Herbal medicine is very widely used at this time because of its very good for your health...</div>
            <div className='checkCardMore'>Read more <img className='arrowCard' src="./src/assets/arrowCard.svg"/></div>
        </div>
        <div className='checkCard'>
            <img className='checkImage' src="./src/assets/check3.svg"/>
            <div className='checkCardTitle'>Natural care for healthy <br/>facial skin</div>
            <div className='checkCardText'>A healthy lifestyle should start from now and also for your skin health.<br/>There are some...</div>
            <div className='checkCardMore'>Read more <img className='arrowCard' src="./src/assets/arrowCard.svg"/></div>
        </div>
    </div>
  );
}