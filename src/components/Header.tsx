import './Header.modules.css';
import Title from './Title';

interface IParam {
    title: string;
  }
  
export default function Header(par: IParam) {
  return (
    <div className='headerBlock'>
        <Title title={par.title}/>
        <div className='underlining'></div>
    </div>
  );
}