import Button from '../Atoms/Button/Button';
import './CommandPanel.scss';

export default function CommandPanel (props) {
    return (
        <>
            <div className="command-panel">
                <div className="decoration decoration--black decoration--black--big">
                    <p>La Pokédex es una enciclopedia electrónica que registra información acerca de los Pokémon. Este dispositivo registra datos cuando capturas un Pokémon y muestra su imagen y detalles.</p>
                </div>
                <div>
                    <div className='flex'>
                        <Button style="btn border-radius--1" txt="Home"></Button>
                        <Button style="btn" txt="Grid"></Button>
                        <Button style="btn border-radius--2" txt="Light Mode"></Button>
                    </div>
                    <div className='flex'>
                        <Button style="btn border-radius--3" txt="Favorites"></Button>
                        <Button style="btn" txt="List"></Button>
                        <Button style="btn border-radius--4" txt="Dark Mode"></Button>
                    </div>
                </div>
                <div className='decoration__row--special'>
                    <div className='decoration__row'>
                        <div className="decoration decoration--white"></div>
                        <div className="decoration decoration--white"></div>
                    </div>
                    <div className="decoration decoration--yellow"></div>
                </div>
                <div className='decoration__row'>
                    <div className="decoration decoration--black"></div>
                    <div className="decoration decoration--black"></div>
                </div>
            </div>
        </>
    )
}