import './Button.modules.css';

interface IParam {
    buttonText: string;
    buttonIcon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
  }
  
export default function Button(par: IParam) {
  return (
    <button className='button' onClick={par.onClick}>
      <div className='buttonText'>
      {par.buttonText} {<div className="buttonIcon">{par.buttonIcon}</div>}
      </div>
    </button>
  );
}