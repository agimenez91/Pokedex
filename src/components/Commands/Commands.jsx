import './Commands.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CommandContext } from '../../context/CommandContext';
import { Button } from '../index'

export default function Commands (props) {

    const { toggleTheme, handleView } = useContext(CommandContext)

    return (
        <>
            <div>
                <div className='flex'>
                    <Link aria-label='This link drives you to the home page' className='btn border-radius--1' to='/'>Home</Link>
                    <Button ariaLabel='This button changes between grid and list pokemon list view' style="btn" txt="Grid/List" click={handleView}></Button>
                    <Button ariaLabel='This button changes the theme mode' style="btn border-radius--2" txt="Light/Dark" click={toggleTheme}></Button>
                </div>
                <div className='flex'>
                    <Link className='btn border-radius--3' to='/Favorites'>Favorites</Link>
                    <Button ariaLabel='This button is disabled' style=" disabled btn"></Button>
                    <Button ariaLabel='This button is disabled' style=" disabled btn border-radius--4"></Button>
                </div>
            </div>      
        </>
    )
}