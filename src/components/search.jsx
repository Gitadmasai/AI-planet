import './search.css'
import { Link } from 'react-router-dom';




export function Searchbar(){

    return(

        <div className="search-text">
        <div className='text-p'>
            <Link className='nav-link' to="/submissiondetail">All Submissions</Link>
            <Link className='nav-link' to="/favsubmissiondetail" style={{marginRight:'100px'}}>Favourite Submission</Link>
        </div>
        </div>
        
    )
}