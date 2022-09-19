import './style.css'

export default function Film(props){
    return(
        <div className='film-card'>
            <img src={`https://image.tmdb.org/t/p/original/${props.film.backdrop_path}`} alt="" />
        </div>
    )
}