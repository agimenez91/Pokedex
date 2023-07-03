import './Topbar.scss';

export default function Topbar (props) {
    return (
        <>
            <div className="topbar">
                <div className="camera">
                    <div className="camera__glass">
                        <div className="camera__glass--reflex"></div>
                    </div>
                </div>
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