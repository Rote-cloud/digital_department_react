import './MyText.modules.css';

interface IParam {
    text: string;
  }
  
export default function MyText(par: IParam) {
  return (
    <div className='text'>{par.text}</div>
  );
}