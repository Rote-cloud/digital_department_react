import './ReviewHuman.modules.css';

interface IParam {
    question: string;
    avatar: string;
    nameAvatar: string;
    jobAvatar: string;
    textAvatar: string;
  }

export default function ReviewHuman(par: IParam) {
  return (
    <div>
        <div className='reviewQuestion'>{par.question}</div>
        <div className='reviewUnderlining'></div>

        <div className='reviewFlex'>
            <img className='avatar' src={par.avatar} />
            <div className='reviewNameAndJob'>
                <div className='reviewName'>{par.nameAvatar}</div>
                <div className='reviewJob'>{par.jobAvatar}</div>
            </div>
            <div className='reviewText'>
                {par.textAvatar}
            </div>
        </div>
    </div>
  );
}