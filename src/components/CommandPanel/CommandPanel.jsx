import Button from '../Atoms/Button/Button';
import './CommandPanel.scss';

export default function CommandPanel (props) {
    return (
        <>
            <div className="command-panel">
                <div className='command-panel--row'>
                    <Button style="btn border-radius--1" txt="Home"></Button>
                    <Button style="btn" txt="Grid"></Button>
                    <Button style="btn border-radius--2" txt="Light Mode"></Button>
                </div>
                <div className='command-panel--row'>
                    <Button style="btn border-radius--3" txt="Favorites"></Button>
                    <Button style="btn" txt="List"></Button>
                    <Button style="btn border-radius--4" txt="Dark Mode"></Button>
                </div>
            </div>
        </>
    )
}