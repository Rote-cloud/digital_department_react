import './Title.modules.css';

interface IParam {
    title: string;
  }
  
export default function Title(par: IParam) {
  return (
    <div className='headerBlock'>
        <div className='title'>{par.title}</div>
    </div>
  );
}