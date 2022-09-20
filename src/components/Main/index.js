import { Link } from 'react-router-dom'
import './style.css'

export default function Main(props){

    // console.log(props.movie)

    return(
        <div className='movie-main'>
            <img src={`https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`} alt="" className='movie-main-background'/>
            <div className='movie-main-container'>
                <div className='movie-main-container-content'>
                    <div className='movie-main-container-title'>{props.movie.title}</div>
                    <div className='movie-main-container-text'>{props.movie.overview}</div>
                    <div className='movie-main-container-buttons'>
                        <Link className='btn-play'><i className="fa-solid fa-play"></i> Assistir</Link>
                        <Link className='btn-info'><i className="fa-solid fa-circle-info"></i>Mais informações</Link>
                    </div>
                </div>
            </div>
            <div className='smoothie'></div>
        </div>
    )
}