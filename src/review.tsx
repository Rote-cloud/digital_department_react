import './review.css';

export default function Review() {
  return (
    <div className='reviewBlock'>
        <div className='review'>
        <img className='reviewImage' src="./src/assets/element2.svg" />

        <div className='reviewQuestion'>What our customer are saying</div>
        <div className='reviewUnderlining'></div>

        <div className='reviewFlex'>
            <img className='avatar' src="./src/assets/Avatar.svg" />
            <div className='reviewNameAndJob'>
                <div className='reviewName'>Edward Newgate</div>
                <div className='reviewJob'>Founder Circle</div>
            </div>
            <div className='reviewText'>
                “Our dedicated patient engagement app and <br/>web portal allow you to access information instantaneously (no tedeous form, long calls, <br/>or administrative hassle) and securely”
            </div>
        </div>

        </div>

        <div className='slider'>
          <img className='arrowLeft' src="./src/assets/arrow1.svg"/>
          <img className='reviewSlider' src="./src/assets/slider.svg"/>
          <img className='arrowRight' src="./src/assets/arrow2.svg"/>
        </div>

        <img className='reviewImage2' src="./src/assets/element1.svg" />
    </div>
  );
}