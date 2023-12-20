import { useState } from "react";
import './Review.modules.css';
import ReviewHuman from './ReviewHuman';

interface IParam {
  question: string;
  avatar: string;
  nameAvatar: string;
  jobAvatar: string;
  textAvatar: string;
}

const reviews: IParam[] = [
  {
    question: 'What our customer are saying',
    avatar: './src/assets/Avatar.svg',
    nameAvatar: 'Edward Newgate',
    jobAvatar: 'Founder Circle',
    textAvatar: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”'
  },
  {
    question: 'What our customer are saying',
    avatar: './src/assets/Edward.jpg',
    nameAvatar: 'Edward Newgate',
    jobAvatar: 'Founder Circle',
    textAvatar: 'I am a true Edward Newgate'
  },
  {
    question: 'What our customer are saying',
    avatar: './src/assets/Avatar.svg',
    nameAvatar: 'Edward Newgate',
    jobAvatar: 'Founder Circle',
    textAvatar: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”'
  },
  {
    question: 'What our customer are saying',
    avatar: './src/assets/Edward.jpg',
    nameAvatar: 'Edward Newgate',
    jobAvatar: 'Founder Circle',
    textAvatar: 'I am a true Edward Newgate'
  }
]

export default function Review() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex(index + 1);
    if (index > reviews.length - 1) {
      setIndex(0);
    }
  };

  const prevSlide = () => {
    setIndex(index - 1);
    if (index < 0) {
      setIndex(reviews.length - 1);
    }
  };

  return (
    <div className='reviewBlock'>
        <div className='review'>
        <img className='reviewImage' src="./src/assets/element2.svg" />

        <ReviewHuman {...reviews[index]} />
        </div>
        <div className='slider'>
          {index === 0 ? (
            <img className='arrowLeft' src="./src/assets/arrow1.svg"/>
          ) : (
            <img style={{transform: "rotate(180deg)"}}  className='arrowRight' src="./src/assets/arrow2.svg" onClick={prevSlide}/>
          )}
          <img className='reviewSlider' src="./src/assets/slider.svg"/>
          {index === reviews.length - 1 ? (
            <img style={{transform: "rotate(180deg)"}}  className='arrowRight' src="./src/assets/arrow1.svg"/>
          ) : (
            <img className='arrowLeft' src="./src/assets/arrow2.svg" onClick={nextSlide}/>
          )}
        </div>

        <img className='reviewImage2' src="./src/assets/element1.svg" />
    </div>
  );
}