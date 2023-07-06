import { Link } from 'react-router-dom';
import Button from '../Atoms/Button/Button';
import './Commands.scss';

export default function Commands (props) {
    return (
        <>
            <div>
                <div className='flex'>
                    <Link className='btn border-radius--1' to='/'>Home</Link>
                    <Button style="btn" txt="Grid"></Button>
                    <Button style="btn border-radius--2" txt="Light Mode"></Button>
                </div>
                <div className='flex'>
                    <Button style="btn border-radius--3" txt="Favorites"></Button>
                    <Button style="btn" txt="List"></Button>
                    <Button style="btn border-radius--4" txt="Dark Mode"></Button>
                </div>
            </div>      
        </>
    )
}