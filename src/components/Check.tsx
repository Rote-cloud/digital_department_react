import { useState } from "react";
import Button from './Button';
import './Check.modules.css';
import CheckCard from './CheckCard';
import Header from './Header';

export default function Check() {
  const [clicks, setClicks] = useState(0);
  const [buttonText, setButtonText] = useState("View all");

  const handleClick = () => {
    setClicks(clicks + 1);
    if (clicks % 2 === 0) {
      setButtonText("Hide");
    } else {
      setButtonText("View all");
    }
  };

  return (
    <div className='check'>
        <div style={{width: "70%", display: "inline-block", marginTop: "220px"}}>
          <Header title='Check out our latest article'/>
        </div>

        <CheckCard />
        {clicks % 2 === 1 && <CheckCard />}

        <div style={{ marginTop: "72px"}}>
          <Button buttonText={buttonText} onClick={handleClick} />
        </div>

        <img className='checkElement' src="./src/assets/element1.svg" />
        <img className='checkBgElement' src="./src/assets/bgElement2.svg"/>
    </div>
  );
}