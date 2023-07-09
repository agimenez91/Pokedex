import './Icon.scss';
import { IconMap } from './IconMap';

export default function Icon (props) {
    return (
        <>
           {props.name ? (
                <>
                    <div className='tooltip'>{IconMap[props.name]}<span className='tooltip__msg'>{props.name}</span></div>
                </>
            ) : ("")}
        </>
    )
}