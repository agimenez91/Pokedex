import { Link } from 'react-router-dom';
import Button from '../Atoms/Button/Button';
import './Commands.scss';
import { useContext } from 'react';
import { CommandContext } from '../../context/CommandContext';

export default function Commands (props) {

    const { toggleTheme, handleView } = useContext(CommandContext)

    return (
        <>
            <div>
                <div className='flex'>
                    <Link className='btn border-radius--1' to='/'>Home</Link>
                    <Button style="btn" txt="Grid" click={handleView}></Button>
                    <Button style="btn border-radius--2" txt="Light Mode" click={toggleTheme}></Button>
                </div>
                <div className='flex'>
                    <Button style="btn border-radius--3" txt="Favorites"></Button>
                    <Button style="btn" txt="List" click={handleView}></Button>
                    <Button style="btn border-radius--4" txt="Dark Mode" click={toggleTheme}></Button>
                </div>
            </div>      
        </>
    )
}