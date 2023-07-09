import './Pagination.scss';
import { Link } from 'react-router-dom';

export default function Pagination ({id}) {

    // Set previous and next ID:
    const nextID = id + 1;
    const previousID = id - 1;

    return (
        <>
            <p className='pagination'>{previousID ? (<Link to={`/pokemon/${previousID}`}>← Previous</Link>) : (" ")} / {nextID ? (<Link to={`/pokemon/${nextID}`}>Next ➝</Link>) : (" ")}</p>
        </>
    )
}