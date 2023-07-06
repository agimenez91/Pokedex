import { Link } from 'react-router-dom';
import './Pagination.scss';

export default function Pagination ({id}) {

    const nextID = id + 1;
    const previousID = id - 1;

    return (
        <>
            <p className='pagination'>{previousID ? (<Link to={`/pokemon/${previousID}`}>← Previous</Link>) : (" ")} / {nextID ? (<Link to={`/pokemon/${nextID}`}>Next ➝</Link>) : (" ")}</p>
        </>
    )
}