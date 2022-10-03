import { Link } from 'react-router-dom'
import './style.css'

export default function Film(props){
    return(
        <Link to={`/movie/${props.film.id}`} className='film-card'>
            <img src={`https://image.tmdb.org/t/p/original/${props.film.backdrop_path}`} alt="" />
            <div className='film-card-info'>
                <div className='film-card-info-group'>
                    <div className='film-card-info-title'>{props.film.title}</div>
                    <div>
                        { props.film.adult ?
                            <div className='classification classification-18'>18</div> :
                            <div className='classification classification-l'>L</div>
                        }
                        
                        
                    </div>
                </div>
            </div>
        </Link>
    )
}