import CommandPanel from '../../components/CommandPanel/CommandPanel'
import ScreenPanel from '../../components/ScreenPanel/ScreenPanel'
import Topbar from '../../components/Topbar/Topbar'
import './Home.scss'

export default function Home (props) {
    return (
        <>
            <div className="home">
                <Topbar></Topbar>
                <div className='home--panel'>
                    <ScreenPanel></ScreenPanel>
                    <CommandPanel></CommandPanel>
                </div>
            </div>
        </>
    )
}