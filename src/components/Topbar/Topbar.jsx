import { Link } from 'react-router-dom';
import './Topbar.scss';

export default function Topbar () {
    return (
        <>
            <div className="topbar">
                <Link aria-label='This link drives you to the home page' className='camera' to='/'>
                    <div className="camera__glass">
                        <div className="camera__glass--reflex"></div>
                    </div>
                </Link>
                <div className="camera__btn--wrap">
                    <div className="camera__btn">
                        <div className="camera__btn--reflex"></div>
                    </div>
                    <div className="camera__btn">
                        <div className="camera__btn--reflex"></div>
                    </div>
                    <div className="camera__btn">
                        <div className="camera__btn--reflex"></div>
                    </div>
                </div>
            </div>
        </>
    )
}